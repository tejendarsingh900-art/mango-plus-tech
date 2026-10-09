import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { InnerCta, InnerHero, SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { cmsMetadata } from '../../lib/cms';
export function generateMetadata():Promise<Metadata>{return cmsMetadata('insights',{ title:'Insights | Mango Plus Tech',description:'Practical thinking about web technology, SEO, conversion design and digital growth.' })}
const posts=[
 {slug:'seo-in-2026',image:'/insights/seo-2026.png',tag:'SEO',time:'8 MIN',title:'SEO in 2026: what actually moves the needle?',copy:'A practical guide to technical foundations, useful content and the signals that compound.'},
 {slug:'website-conversion-signs',image:'/insights/website-conversion.png',tag:'WEB DESIGN',time:'6 MIN',title:'Seven signs your website is quietly costing customers',copy:'How friction, hierarchy and performance gaps weaken otherwise strong businesses.'},
 {slug:'advertising-rupee',image:'/insights/ad-performance.png',tag:'PAID MEDIA',time:'5 MIN',title:'How to make every advertising rupee work harder',copy:'A disciplined framework for creative testing, measurement and profitable scale.'},
 {slug:'product-idea-to-platform',image:'/pages/product-strategy.png',tag:'PRODUCT',time:'7 MIN',title:'From business idea to useful digital product',copy:'The questions worth answering before design and development begin.'},
 {slug:'why-nextjs',image:'/services/web-development.png',tag:'TECHNOLOGY',time:'9 MIN',title:'Why modern businesses are moving to Next.js',copy:'Performance, scalability and the practical advantages behind the technology choice.'},
 {slug:'brand-consistency-growth',image:'/services/brand-creative.png',tag:'BRAND',time:'6 MIN',title:'Consistency is a growth strategy, not a design detail',copy:'Building a visual system customers can recognise and teams can actually use.'}
];
export default function InsightsPage(){const f=posts[0];return <main><SiteHeader/><InnerHero kicker="INSIGHTS / FRESH THINKING" title="Useful ideas for" accent="building what’s next." copy="Clear, practical perspectives from the intersection of business strategy, experience design, technology and growth."/><section className="insight-page inner-section shell"><div className="featured-post"><Link className="featured-image" href={`/insights/${f.slug}`}><Image src={f.image} alt={f.title} fill sizes="(max-width:800px) 100vw, 58vw"/></Link><div><span>{f.tag} · {f.time} READ</span><h2>{f.title}</h2><p>{f.copy}</p><Link href={`/insights/${f.slug}`}>Read insight <ArrowRight/></Link></div></div><div className="post-grid">{posts.slice(1).map(p=><article key={p.title}><Link href={`/insights/${p.slug}`}><Image src={p.image} alt={p.title} fill sizes="(max-width:800px) 100vw, 380px"/></Link><span>{p.tag} · {p.time} READ</span><h3>{p.title}</h3><p>{p.copy}</p><Link href={`/insights/${p.slug}`}>Read article <ArrowRight/></Link></article>)}</div></section><InnerCta/><SiteFooter/></main>}
