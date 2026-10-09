import type { Metadata } from 'next';
import { cmsMetadata } from '../../lib/cms';
export function generateMetadata():Promise<Metadata>{return cmsMetadata('contact',{title:'Contact | Mango Plus Tech',description:'Start a website, SEO, performance marketing or digital product project with Mango Plus Tech.'})}
export default function ContactLayout({children}:{children:React.ReactNode}){return children}
