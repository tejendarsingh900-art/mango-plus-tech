import mysql, { type Pool, type RowDataPacket } from 'mysql2/promise';

declare global { var mangoDb: Pool | undefined; var mangoDbReady: Promise<void> | undefined }

export const db = global.mangoDb ?? mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  database: process.env.DB_NAME || 'mango_plus_tech',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  connectionLimit: 8,
  timezone: '+05:30',
  charset: 'utf8mb4',
});
if (process.env.NODE_ENV !== 'production') global.mangoDb = db;

const seedPages = [
  ['home','Homepage','Home page sections, buttons, metrics and imagery'],['services','Services','Services overview and service cards'],['company','Company','Company story, values and numbers'],['work','Work','Selected work and case studies'],['insights','Insights','Articles and editorial content'],['contact','Contact','Contact details, form copy and locations'],['careers','Careers','Culture, roles and recruitment copy'],['privacy','Privacy Policy','Privacy policy content'],['terms','Terms & Conditions','Terms and conditions content'],
];

export function ensureSchema(){
  if (!global.mangoDbReady) global.mangoDbReady=(async()=>{
    await db.query(`CREATE TABLE IF NOT EXISTS admins (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(120) NOT NULL, email VARCHAR(190) NOT NULL UNIQUE, password_hash VARCHAR(255) NOT NULL, role ENUM('superadmin','editor') NOT NULL DEFAULT 'superadmin', created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    await db.query(`CREATE TABLE IF NOT EXISTS admin_sessions (id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, admin_id INT UNSIGNED NOT NULL, token_hash CHAR(64) NOT NULL UNIQUE, expires_at DATETIME NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, INDEX(admin_id), INDEX(expires_at), CONSTRAINT fk_session_admin FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    await db.query(`CREATE TABLE IF NOT EXISTS cms_pages (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, slug VARCHAR(160) NOT NULL UNIQUE, name VARCHAR(190) NOT NULL, summary VARCHAR(255) NULL, status ENUM('draft','published') NOT NULL DEFAULT 'published', seo_title VARCHAR(255) NULL, seo_description TEXT NULL, og_image VARCHAR(500) NULL, content_json JSON NULL, updated_by INT UNSIGNED NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, INDEX(status)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    await db.query(`CREATE TABLE IF NOT EXISTS cms_media (id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, filename VARCHAR(255) NOT NULL, original_name VARCHAR(255) NOT NULL, path VARCHAR(500) NOT NULL, mime_type VARCHAR(100) NOT NULL, size_bytes BIGINT UNSIGNED NOT NULL DEFAULT 0, alt_text VARCHAR(255) NULL, uploaded_by INT UNSIGNED NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    await db.query(`CREATE TABLE IF NOT EXISTS cms_settings (setting_key VARCHAR(190) PRIMARY KEY, setting_value TEXT NULL, setting_group VARCHAR(80) NOT NULL DEFAULT 'general', updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    for (const [slug,name,summary] of seedPages) await db.execute("INSERT IGNORE INTO cms_pages (slug,name,summary,content_json) VALUES (?,?,?,JSON_OBJECT('elements',JSON_ARRAY()))",[slug,name,summary]);
    const settings=[['site_name','Mango Plus Tech','general'],['contact_email','hello@mangoplustech.com','contact'],['contact_phone','+91 99999 99999','contact'],['contact_location','Gurugram, India','contact'],['default_seo_title','Mango Plus Tech — Digital Growth, Built Better','seo'],['default_seo_description','Web development, SEO, performance marketing and creative digital solutions built to grow modern businesses.','seo']];
    for(const row of settings) await db.execute('INSERT IGNORE INTO cms_settings (setting_key,setting_value,setting_group) VALUES (?,?,?)',row);
  })();
  return global.mangoDbReady;
}

export async function queryRows<T extends RowDataPacket[]>(sql:string,values:any[]=[]){await ensureSchema();const [rows]=await db.execute<T>(sql,values);return rows}
