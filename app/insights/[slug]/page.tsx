import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { SiteFooter, SiteHeader } from '../../../components/SiteChrome';
import { insightPosts } from '../../../lib/siteData';
type Slug=keyof typeof insightPosts;
export function generateStaticParams(){return Object.keys(insightPosts).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const item=insightPosts[slug as Slug];return item?{title:`${item.title} | Mango Plus Tech`,description:item.lead}:{} }
export default async function InsightPost({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const item=insightPosts[slug as Slug];if(!item)notFound();return <main><SiteHeader/><article className="article-page"><header className="article-head shell"><small>{item.tag} · MANGO PLUS INSIGHTS</small><h1>{item.title}</h1><p className="lead">{item.lead}</p></header><div className="article-page-image shell"><Image src={item.image} alt={item.title} fill priority sizes="100vw"/></div><div className="article-body">{item.sections.map(([title,copy],i)=><section key={title}><span>0{i+1}</span><h2>{title}</h2><p>{copy}</p></section>)}<aside><strong>Need this thinking applied to your business?</strong><Link href="/contact">Talk to our team <ArrowRight/></Link></aside></div></article><SiteFooter/></main>}
