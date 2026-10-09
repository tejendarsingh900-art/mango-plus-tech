import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import { InnerCta, SiteFooter, SiteHeader } from '../../../components/SiteChrome';
import { caseStudies } from '../../../lib/siteData';
type Slug=keyof typeof caseStudies;
export function generateStaticParams(){return Object.keys(caseStudies).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const item=caseStudies[slug as Slug];return item?{title:`${item.title} | Mango Plus Tech`,description:item.challenge}:{} }
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const item=caseStudies[slug as Slug];if(!item)notFound();return <main><SiteHeader/><section className="case-hero"><div className="shell"><span>{item.type}</span><h1>{item.title}</h1><div><strong>{item.metric}</strong><p>{item.metricLabel}</p></div></div></section><section className="case-image shell"><Image src={item.image} alt={item.title} fill priority sizes="100vw"/></section><section className="case-story inner-section shell"><article><span>THE CHALLENGE</span><h2>Clarity before creativity.</h2><p>{item.challenge}</p></article><article><span>THE SOLUTION</span><h2>One connected experience.</h2><p>{item.solution}</p></article></section><section className="case-results"><div className="shell"><span>MEASURABLE IMPACT</span><h2>Work that moved<br/>the business.</h2><div>{item.results.map(x=><p key={x}><CheckCircle weight="fill"/>{x}</p>)}</div></div></section><InnerCta/><SiteFooter/></main>}
