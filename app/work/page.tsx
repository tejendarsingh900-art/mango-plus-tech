import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendUp } from '@phosphor-icons/react/dist/ssr';
import { InnerCta, InnerHero, SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { cmsMetadata } from '../../lib/cms';
export function generateMetadata():Promise<Metadata>{return cmsMetadata('work',{ title:'Selected Work | Mango Plus Tech',description:'Explore digital products, websites and growth programmes delivered by Mango Plus Tech.' })}
const work=[
  {slug:'wellness-commerce',image:'/work/wellness-commerce.png',type:'E-COMMERCE / DEVELOPMENT',title:'A premium wellness experience built to convert',metric:'+184%',label:'revenue growth'},
  {slug:'seo-category-leader',image:'/work/seo-growth.png',type:'SEO / PERFORMANCE',title:'Turning search visibility into category leadership',metric:'4.2×',label:'organic traffic'},
  {slug:'bold-brand-future',image:'/work/brand-campaign.png',type:'BRAND / CAMPAIGN',title:'A bold identity designed for modern discovery',metric:'−68%',label:'cost per lead'}
];
export default function WorkPage(){return <main><SiteHeader/><InnerHero kicker="WORK / SELECTED OUTCOMES" title="The work looks good." accent="The numbers look better." copy="A selection of digital experiences where sharper strategy, thoughtful craft and modern technology created measurable movement."/><section className="work-page inner-section shell"><div className="work-filter"><span>SELECTED CASE STUDIES</span><p>Websites · Products · Search · Performance</p></div>{work.map((w,i)=><article key={w.title}><Link className="work-page-image" href={`/work/${w.slug}`}><Image src={w.image} alt={w.title} fill sizes="100vw"/><span>0{i+1}</span></Link><div className="work-page-info"><div><small>{w.type}</small><h2>{w.title}</h2></div><div className="work-result"><TrendUp weight="bold"/><strong>{w.metric}</strong><span>{w.label}</span></div><Link href={`/work/${w.slug}`} aria-label={`View ${w.title}`}><ArrowUpRight/></Link></div></article>)}</section><InnerCta/><SiteFooter/></main>}
