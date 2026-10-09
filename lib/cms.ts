import 'server-only';
import type { Metadata } from 'next';
import type { RowDataPacket } from 'mysql2';
import { queryRows } from './db';
export async function cmsMetadata(slug:string,fallback:Metadata):Promise<Metadata>{try{const rows=await queryRows<(RowDataPacket&{seo_title:string;seo_description:string;og_image:string})[]>('SELECT seo_title,seo_description,og_image FROM cms_pages WHERE slug=? AND status="published" LIMIT 1',[slug]);const page=rows[0];if(!page)return fallback;return{...fallback,title:page.seo_title||fallback.title,description:page.seo_description||fallback.description,openGraph:page.og_image?{images:[page.og_image]}:fallback.openGraph}}catch{return fallback}}
