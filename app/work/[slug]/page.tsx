import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Lightning, Sparkle, TrendUp } from '@phosphor-icons/react/dist/ssr';
import { InnerCta, SiteFooter, SiteHeader } from '../../../components/SiteChrome';
import { caseStudies } from '../../../lib/siteData';
import { portfolioProjects } from '../../../lib/portfolio';
import PortfolioConcept from '../../../components/PortfolioConcept';

type Slug=keyof typeof caseStudies;

const caseVisuals:Record<Slug,{support:string;detail:string;services:string[];timeline:string}>={
  'wellness-commerce':{support:'/pages/redesign/commerce.webp',detail:'/pages/redesign/company.webp',services:['Commerce strategy','UX & interface design','Next.js development','Analytics & optimisation'],timeline:'14 weeks'},
  'seo-category-leader':{support:'/reference/service-cards/seo-growth.webp',detail:'/pages/redesign/services.webp',services:['Technical SEO','Information architecture','Content strategy','Growth measurement'],timeline:'6 months'},
  'bold-brand-future':{support:'/reference/slider-creative.webp',detail:'/pages/redesign/careers.webp',services:['Brand strategy','Visual identity','Digital experience','Campaign creative'],timeline:'12 weeks'},
};

export function generateStaticParams(){return [...Object.keys(caseStudies),...portfolioProjects.filter(p=>p.concept).map(p=>p.slug)].map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const item=caseStudies[slug as Slug];const concept=portfolioProjects.find(p=>p.slug===slug&&p.concept);return item?{title:`${item.title} | Mango Plus Tech`,description:item.challenge}:concept?{title:`${concept.title} — Design Concept | Mango Plus Tech`,description:concept.overview}:{} }

export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
  const{slug}=await params;const concept=portfolioProjects.find(p=>p.slug===slug&&p.concept);if(concept)return <PortfolioConcept project={concept}/>;const key=slug as Slug;const item=caseStudies[key];if(!item)notFound();const visual=caseVisuals[key];
  return <main className="public-site case-page">
    <SiteHeader/>
    <section className="case-hero">
      <div className="case-hero-grid"/>
      <div className="shell">
        <Link className="case-back" href="/work"><ArrowLeft/> All work</Link>
        <div className="case-hero-layout">
          <div><span>{item.type}</span><h1>{item.title}</h1><p>{item.challenge}</p></div>
          <div className="case-hero-stat"><TrendUp weight="bold"/><strong>{item.metric}</strong><p>{item.metricLabel}</p></div>
        </div>
      </div>
    </section>

    <section className="case-feature shell">
      <div className="case-feature-image"><Image src={item.image} alt={item.title} fill priority sizes="(max-width:800px) 100vw, 1180px"/></div>
      <div className="case-feature-caption"><span>THE TRANSFORMATION</span><p>Strategy, creative and technology moving together—with every decision tied to a measurable business outcome.</p></div>
    </section>

    <section className="case-overview inner-section shell">
      <div className="case-overview-title"><span>PROJECT OVERVIEW</span><h2>A clearer experience.<br/><em>A stronger business.</em></h2></div>
      <div className="case-facts"><div><small>ENGAGEMENT</small><strong>{visual.timeline}</strong></div><div><small>CAPABILITIES</small>{visual.services.map(x=><p key={x}>{x}</p>)}</div></div>
    </section>

    <section className="case-narrative"><div className="shell">
      <article><div className="case-narrative-copy"><span>01 / THE CHALLENGE</span><h2>Clarity before creativity.</h2><p>{item.challenge}</p><div className="case-note"><Lightning weight="fill"/><p>We focused the team on the moments that mattered most to customer confidence and commercial performance.</p></div></div><div className="case-narrative-image"><Image src={visual.support} alt="Project strategy and interface exploration" fill sizes="(max-width:800px) 100vw, 50vw"/></div></article>
      <article><div className="case-narrative-copy"><span>02 / THE SOLUTION</span><h2>One connected experience.</h2><p>{item.solution}</p><div className="case-note"><Sparkle weight="fill"/><p>One multidisciplinary team carried the idea from insight through design, build and measurable launch.</p></div></div><div className="case-narrative-image"><Image src={visual.detail} alt="Mango Plus team creating the solution" fill sizes="(max-width:800px) 100vw, 50vw"/></div></article>
    </div></section>

    <section className="case-results"><div className="shell"><div className="case-results-head"><span>03 / MEASURABLE IMPACT</span><h2>Work that moved<br/>the business.</h2><p>Beautiful work matters more when it creates useful, lasting momentum.</p></div><div className="case-result-grid">{item.results.map((x,i)=><article key={x}><span>0{i+1}</span><CheckCircle weight="fill"/><strong>{x}</strong></article>)}</div></div></section>

    <InnerCta/><SiteFooter/>
  </main>
}
