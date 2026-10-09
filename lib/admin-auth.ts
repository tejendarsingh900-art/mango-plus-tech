import 'server-only';
import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { RowDataPacket } from 'mysql2';
import { db, ensureSchema, queryRows } from './db';

const COOKIE='mango_admin_session';
export type AdminUser={id:number;name:string;email:string;role:'superadmin'|'editor'};
type AdminRow=RowDataPacket&AdminUser&{password_hash:string};
export function hashPassword(password:string){const salt=randomBytes(16).toString('hex');const hash=scryptSync(password,salt,64).toString('hex');return `${salt}:${hash}`}
export function verifyPassword(password:string,stored:string){try{const [salt,hex]=stored.split(':');const expected=Buffer.from(hex,'hex');const actual=scryptSync(password,salt,64);return expected.length===actual.length&&timingSafeEqual(expected,actual)}catch{return false}}
const tokenHash=(token:string)=>createHash('sha256').update(token).digest('hex');
export async function adminCount(){const rows=await queryRows<(RowDataPacket&{count:number})[]>('SELECT COUNT(*) count FROM admins');return Number(rows[0]?.count||0)}
export async function createFirstAdmin(name:string,email:string,password:string){await ensureSchema();if(await adminCount())throw new Error('Admin setup is already complete.');await db.execute('INSERT INTO admins (name,email,password_hash) VALUES (?,?,?)',[name,email.toLowerCase(),hashPassword(password)])}
export async function loginAdmin(email:string,password:string){const rows=await queryRows<AdminRow[]>('SELECT * FROM admins WHERE email=? LIMIT 1',[email.toLowerCase()]);const admin=rows[0];if(!admin||!verifyPassword(password,admin.password_hash))return false;const token=randomBytes(32).toString('hex');await db.execute('DELETE FROM admin_sessions WHERE expires_at<NOW()');await db.execute('INSERT INTO admin_sessions (admin_id,token_hash,expires_at) VALUES (?,?,DATE_ADD(NOW(),INTERVAL 7 DAY))',[admin.id,tokenHash(token)]);(await cookies()).set(COOKIE,token,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:60*60*24*7});return true}
export async function logoutAdmin(){const jar=await cookies();const token=jar.get(COOKIE)?.value;if(token){await ensureSchema();await db.execute('DELETE FROM admin_sessions WHERE token_hash=?',[tokenHash(token)])}jar.delete(COOKIE)}
export async function getAdmin():Promise<AdminUser|null>{const token=(await cookies()).get(COOKIE)?.value;if(!token)return null;const rows=await queryRows<(RowDataPacket&AdminUser)[]>(`SELECT a.id,a.name,a.email,a.role FROM admin_sessions s JOIN admins a ON a.id=s.admin_id WHERE s.token_hash=? AND s.expires_at>NOW() LIMIT 1`,[tokenHash(token)]);return rows[0]||null}
export async function requireAdmin(){const admin=await getAdmin();if(!admin)redirect('/admin/login');return admin}
