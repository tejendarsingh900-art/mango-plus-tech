import { NextRequest, NextResponse } from 'next/server';
import type { RowDataPacket } from 'mysql2';
import { queryRows } from '../../../../lib/db';
export const dynamic='force-dynamic';
export async function GET(request:NextRequest){const slug=request.nextUrl.searchParams.get('slug')||'home';const rows=await queryRows<(RowDataPacket&{seo_title:string;seo_description:string;og_image:string;content_json:unknown})[]>('SELECT seo_title,seo_description,og_image,content_json FROM cms_pages WHERE slug=? AND status="published" LIMIT 1',[slug]);if(!rows[0])return NextResponse.json({error:'Not found'},{status:404});return NextResponse.json(rows[0],{headers:{'Cache-Control':'no-store'}})}
