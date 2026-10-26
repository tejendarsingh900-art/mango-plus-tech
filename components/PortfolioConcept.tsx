import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft,CheckCircle,Sparkle} from '@phosphor-icons/react/dist/ssr';
import {InnerCta,SiteFooter,SiteHeader} from './SiteChrome';
import type {PortfolioProject} from '../lib/portfolio';

export default function PortfolioConcept({project}:{project:PortfolioProject}){
 return <main className="public-site case-page">
  <SiteHeader/>
  <section className="case-hero"><div className="case-hero-grid"/><div className="shell"><Link className="case-back" href="/work"><ArrowLeft/> All work</Link><div className="case-hero-layout"><div><span>{project.tag} · DESIGN CONCEPT</span><h1>{project.title}</h1><p>{project.sub}</p></div><div className="case-hero-stat"><Sparkle/><strong style={{fontSize:34,letterSpacing:-1}}>Concept</strong><p>Portfolio exploration</p></div></div></div></section>
  <section className="case-feature shell"><div className="case-feature-image" style={{background:'#edf4ff'}}><Image src={project.image} alt={`${project.title} design concept`} fill priority sizes="(max-width:800px) 100vw, 1320px" style={{objectFit:'contain'}}/></div><div className="case-feature-caption"><span>DESIGN EXPLORATION</span><p>This is a portfolio concept showing a creative direction and potential digital experience. It is not presented as completed client work or a measured business result.</p></div></section>
  <section className="case-overview inner-section shell"><div className="case-overview-title"><span>PROJECT OVERVIEW</span><h2>{project.sub}</h2><p style={{fontSize:17,lineHeight:1.8,color:'#647080',marginTop:24}}>{project.overview}</p></div><div className="case-facts"><div><small>PROJECT TYPE</small><strong style={{fontSize:21}}>Design concept</strong></div><div><small>CAPABILITIES EXPLORED</small>{project.categories.map(c=><p key={c}><CheckCircle style={{color:'#2466e8',marginRight:7}}/>{c}</p>)}</div></div></section>
  <InnerCta/><SiteFooter/>
 </main>
}
