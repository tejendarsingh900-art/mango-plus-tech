'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUp, ArrowUpRight, Browser, CaretLeft, CaretRight, ChartLineUp, Code, DeviceMobile, FacebookLogo, InstagramLogo, Lightning, LinkedinLogo, MagnifyingGlass, Megaphone, PenNib, Play, Quotes, RocketLaunch, ShieldCheck, ShoppingBag, Sparkle, Star, Target, TrendUp, XLogo } from '@phosphor-icons/react';

const services = [
  { icon: Code, n:'01', title:'Web Development', text:'Fast, scalable websites built with Next.js and modern technology that turn visitors into customers.', color:'lime', image:'/services/web-development.png' },
  { icon: MagnifyingGlass, n:'02', title:'SEO & Growth', text:'Technical SEO, content strategy and authority building that puts your brand where customers search.', color:'blue', image:'/services/seo-growth.png' },
  { icon: Megaphone, n:'03', title:'Performance Ads', text:'High-intent campaigns across Google and Meta, engineered around measurable returns—not vanity metrics.', color:'orange', image:'/services/performance-ads.png' },
  { icon: PenNib, n:'04', title:'Brand & Creative', text:'Memorable identity systems, conversion-led copy and scroll-stopping creative made for the digital world.', color:'purple', image:'/services/brand-creative.png' },
  { icon: ShoppingBag, n:'05', title:'E-commerce', text:'Beautiful storefronts, frictionless shopping experiences and smart integrations that make selling simple.', color:'pink', image:'/services/ecommerce.png' },
  { icon: DeviceMobile, n:'06', title:'Apps & Products', text:'Thoughtful product design and robust development for web apps, dashboards and mobile experiences.', color:'cyan', image:'/services/apps-products.png' },
];

const projects = [
  { tag:'E-COMMERCE • DEVELOPMENT', title:'Reimagining premium wellness online', metric:'+184%', label:'revenue growth', cls:'project-one', image:'/work/wellness-commerce.png' },
  { tag:'SEO • PERFORMANCE', title:'From page five to category leader', metric:'4.2x', label:'organic traffic', cls:'project-two', image:'/work/seo-growth.png' },
  { tag:'BRANDING • PRODUCT', title:'A bold identity for a smarter future', metric:'68%', label:'lower cost per lead', cls:'project-three', image:'/work/brand-campaign.png' },
];

const testimonials = [
  { quote:'Mango Plus didn’t just build us a beautiful website. They understood our business, challenged our thinking and delivered results that went far beyond the brief.', name:'Arjun Khanna', role:'Founder, Northstar Living', initials:'AK', image:'/studio/client-strategy.png' },
  { quote:'The team turned a complex product vision into a fast, intuitive platform. Our customers noticed the difference from the very first week.', name:'Rhea Malhotra', role:'Director, Veda Commerce', initials:'RM', image:'/studio/product-team.png' },
  { quote:'Strategy, design and engineering finally felt like one conversation. We launched faster and our qualified leads have more than doubled.', name:'Kabir Mehta', role:'CEO, ScaleGrid Labs', initials:'KM', image:'/hero-studio.png' },
  { quote:'Their SEO roadmap was practical, transparent and incredibly effective. Within months, organic search became our strongest acquisition channel.', name:'Neha Bansal', role:'Marketing Head, Orenda', initials:'NB', image:'/studio/client-strategy.png' },
  { quote:'Every sprint was clear and focused. Mango Plus felt less like an outside agency and more like our most dependable product team.', name:'Vikram Sethi', role:'Co-founder, StackOne', initials:'VS', image:'/studio/product-team.png' },
  { quote:'Our campaigns are finally driven by insight instead of guesswork. Better creative, better leads and a significantly healthier return.', name:'Aanya Rao', role:'Growth Lead, Terrene', initials:'AR', image:'/hero-studio.png' },
];

function Logo(){ return <a href="/" className="logo" aria-label="Mango Plus Tech home"><Image src="/mango-plus-logo.png" alt="Mango Plus Tech" width={760} height={154} priority/></a> }

export default function Home() {
  const [testimonialIndex,setTestimonialIndex] = useState(0);
  const [testimonialPaused,setTestimonialPaused] = useState(false);
  const [headerVisible,setHeaderVisible] = useState(true);
  const [headerScrolled,setHeaderScrolled] = useState(false);
  const [showScrollTop,setShowScrollTop] = useState(false);
  useEffect(()=>{ if(testimonialPaused) return; const timer=setInterval(()=>setTestimonialIndex(i=>(i+1)%testimonials.length),5500); return()=>clearInterval(timer) },[testimonialPaused]);
  useEffect(()=>{let previous=window.scrollY;const onScroll=()=>{const current=window.scrollY;setHeaderScrolled(current>45);setShowScrollTop(current>650);setHeaderVisible(current<90||current<previous);previous=current};window.addEventListener('scroll',onScroll,{passive:true});onScroll();return()=>window.removeEventListener('scroll',onScroll)},[]);
  const testimonial=testimonials[testimonialIndex];
  const visibleTestimonials=[0,1,2].map(offset=>testimonials[(testimonialIndex+offset)%testimonials.length]);
  return <main>
    <header className={`nav shell smart-nav ${headerVisible?'is-visible':'is-hidden'} ${headerScrolled?'is-scrolled':''}`}>
      <Logo/>
      <nav><a href="/services">Services</a><a href="/work">Work</a><a href="/company">Company</a><a href="/insights">Insights</a></nav>
      <a className="nav-cta" href="/contact">Start a project <ArrowUpRight weight="bold"/></a>
    </header>

    <section className="hero">
      <Image src="/hero-studio.png" alt="Mango Plus Tech creative team at work" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-overlay"/>
      <div className="shell hero-content">
        <div className="eyebrow"><span/> Strategy. Technology. Growth.</div>
        <h1>We build digital<br/>experiences that<br/><em>move business.</em></h1>
        <p>We bring strategy, design and technology together to turn ambitious ideas into measurable growth.</p>
        <div className="hero-actions"><a className="button primary" href="#contact">Let&apos;s grow together <ArrowRight weight="bold"/></a><a className="showreel" href="#work"><b><Play weight="fill"/></b> See our work</a></div>
      </div>
      <div className="hero-side">SCROLL TO EXPLORE <span/></div>
    </section>

    <section className="metrics"><div className="shell metrics-grid">
      <div><strong>8+</strong><span>Years of<br/>experience</span></div><div><strong>220+</strong><span>Projects<br/>delivered</span></div><div><strong>96%</strong><span>Client<br/>retention</span></div><div><strong>4.9</strong><span><Star weight="fill"/> Average client<br/>rating</span></div>
    </div></section>

    <section className="intro section shell" id="about">
      <div className="section-label">01 — WHO WE ARE</div>
      <div className="intro-grid"><h2>Not just another<br/>digital agency.<br/><span>Your growth partner.</span></h2><div><p className="lead">We combine restless curiosity, sharp strategy and seriously good technology to help ambitious brands grow.</p><p>From a first sketch to a full-scale launch, our tight-knit team works as an extension of yours. No bloated layers. No confusing jargon. Just smart people, honest conversations and work that makes a difference.</p><a href="#contact" className="text-link">Meet Mango Plus <ArrowRight weight="bold"/></a></div></div>
      <div className="about-visual"><Image src="/studio/product-team.png" alt="Mango Plus product design and development team" fill sizes="(max-width: 800px) 100vw, 1180px"/><div className="about-overlay"/><div className="tech-status"><span className="pulse"/> LIVE PRODUCT STUDIO</div><div className="about-caption"><strong>Designing. Coding.<br/>Shipping.</strong><span>One integrated team from<br/>first commit to scale.</span></div></div>
      <div className="capabilities"><span>Strategy</span><i/><span>UX / UI</span><i/><span>Technology</span><i/><span>Marketing</span><i/><span>Growth</span></div>
    </section>

    <section className="services section" id="services"><div className="shell">
      <div className="section-head"><div><div className="section-label light">02 — WHAT WE DO</div><h2>Everything you need<br/>to win <span>online.</span></h2></div><p>One expert team. Every digital capability. All focused on moving your business forward.</p></div>
      <div className="service-grid">{services.map(({icon:Icon,...s})=><article className={`service-card ${s.color}`} key={s.title}><div className="service-visual"><Image src={s.image} alt="" fill sizes="(max-width: 800px) 100vw, 390px"/><div className="service-image-shade"/><div className="service-top"><div className="service-icon"><Icon weight="duotone"/></div><span>{s.n}</span></div></div><div className="service-body"><div className="service-copy"><h3>{s.title}</h3><p>{s.text}</p></div><a className="service-link" href="#contact" aria-label={`Explore ${s.title}`}><span>Explore service</span><b><ArrowUpRight weight="bold"/></b></a></div></article>)}</div>
    </div></section>

    <section className="work section shell" id="work">
      <div className="section-head dark"><div><div className="section-label">03 — SELECTED WORK</div><h2>Proof is in<br/>the <span>performance.</span></h2></div><a className="button outline" href="#contact">View all projects <ArrowRight/></a></div>
      <div className="projects">{projects.map((p,i)=><article className={p.cls} key={p.title}><div className="project-art"><Image src={p.image} alt={p.title} fill sizes="(max-width: 800px) 100vw, 1180px"/><div className="project-shade"/><span className="floating-card"><TrendUp/> Growth unlocked</span><span className="case-index">0{i+1}</span></div><div className="project-info"><div><small>{p.tag}</small><h3>{p.title}</h3></div><div className="project-metric"><strong>{p.metric}</strong><span>{p.label}</span></div><a href="#contact" aria-label={`View ${p.title}`}><ArrowUpRight/></a></div></article>)}</div>
    </section>

    <section className="process section"><div className="shell"><div className="section-label light">04 — HOW WE WORK</div><div className="process-grid"><div className="process-title"><h2>Simple process.<br/><span>Serious outcomes.</span></h2><p>Clear communication, shared goals and complete visibility—from day one to done.</p><div className="stack-visual"><Image src="/studio/technology-stack.png" alt="Connected cloud, web and mobile technology stack" fill sizes="(max-width: 800px) 100vw, 520px"/><div className="stack-chip"><Lightning weight="fill"/> NEXT.JS · CLOUD · AI</div></div></div><div className="steps">{[['01','Discover','We listen, research and uncover the highest-impact opportunities.'],['02','Define','We turn insight into a focused roadmap built around your goals.'],['03','Design & Build','Our strategists, designers and developers bring the vision to life.'],['04','Launch & Grow','We launch, learn and keep optimizing for even better results.']].map(x=><div className="step" key={x[0]}><b>{x[0]}</b><div><h3>{x[1]}</h3><p>{x[2]}</p></div><ArrowUpRight/></div>)}</div></div></div></section>

    <section className="testimonial-slider section" onMouseEnter={()=>setTestimonialPaused(true)} onMouseLeave={()=>setTestimonialPaused(false)} aria-label="Client testimonials"><div className="shell"><div className="testimonial-heading"><div><div className="section-label">CLIENT STORIES</div><h2>Loved by teams<br/>that <span>think big.</span></h2></div><p>Real partnerships. Clear communication.<br/>Work that keeps creating value.</p></div><div className="testimonial-viewport"><div className="testimonial-cards" key={testimonialIndex}>{visibleTestimonials.map((item,i)=><article className={i===0?'featured':''} key={`${item.name}-${testimonialIndex}`}><div className="testimonial-card-image"><Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 380px"/><span>0{(testimonialIndex+i)%testimonials.length+1}</span></div><div className="testimonial-card-body"><div className="card-stars">★★★★★</div><Quotes weight="fill"/><blockquote>“{item.quote}”</blockquote><div className="person"><div>{item.initials}</div><p><strong>{item.name}</strong><span>{item.role}</span></p></div></div></article>)}</div></div><div className="testimonial-controls"><div className="testimonial-dots">{testimonials.map((_,i)=><button key={i} className={i===testimonialIndex?'active':''} onClick={()=>setTestimonialIndex(i)} aria-label={`Show testimonial ${i+1}`}/>)}</div><div className="testimonial-nav"><button onClick={()=>setTestimonialIndex(i=>(i-1+testimonials.length)%testimonials.length)} aria-label="Previous testimonial"><CaretLeft weight="bold"/></button><button onClick={()=>setTestimonialIndex(i=>(i+1)%testimonials.length)} aria-label="Next testimonial"><CaretRight weight="bold"/></button></div></div></div></section>

    <section className="insights section" id="insights"><div className="shell"><div className="section-head dark"><div><div className="section-label">05 — FRESH THINKING</div><h2>Ideas to help<br/>you grow.</h2></div><a className="text-link" href="#contact">Explore all insights <ArrowRight/></a></div><div className="articles">
      <article><div className="article-art"><Image src="/insights/seo-2026.png" alt="SEO analytics and organic growth" fill sizes="(max-width: 800px) 100vw, 380px"/><span>SEO</span></div><small>SEO • 8 MIN READ</small><h3>SEO in 2026: What actually moves the needle?</h3><a href="#contact">Read article <ArrowRight/></a></article>
      <article><div className="article-art"><Image src="/insights/website-conversion.png" alt="Responsive website conversion experience" fill sizes="(max-width: 800px) 100vw, 380px"/><span>WEB DESIGN</span></div><small>WEB DESIGN • 6 MIN READ</small><h3>7 signs your website is quietly costing you customers</h3><a href="#contact">Read article <ArrowRight/></a></article>
      <article><div className="article-art"><Image src="/insights/ad-performance.png" alt="Digital advertising performance dashboard" fill sizes="(max-width: 800px) 100vw, 380px"/><span>PAID MEDIA</span></div><small>PAID MEDIA • 5 MIN READ</small><h3>How to make every ad rupee work harder</h3><a href="#contact">Read article <ArrowRight/></a></article>
    </div></div></section>

    <section className="cta" id="contact"><div className="cta-person-glow"/><Image className="cta-person" src="/cta-tech-consultant.png" alt="Mango Plus technology consultant" width={1024} height={1536} sizes="(max-width: 800px) 45vw, 520px"/><div className="shell"><div className="cta-content"><div className="eyebrow"><span/> HAVE A PROJECT IN MIND?</div><h2>Let&apos;s make something<br/><em>remarkable.</em></h2><p>Tell us where you want to go. We&apos;ll show you how to get there.</p><a className="button dark-button" href="mailto:hello@mangoplustech.com">Start a conversation <ArrowUpRight weight="bold"/></a></div></div></section>

    <button className={`scroll-top ${showScrollTop?'show':''}`} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top"><ArrowUp weight="bold"/><span>Top</span></button>
    <footer><div className="shell"><div className="footer-main"><div><Logo/><p>Technology with taste.<br/>Marketing with purpose.</p><div className="social"><a href="#" aria-label="LinkedIn"><LinkedinLogo weight="fill"/></a><a href="#" aria-label="Instagram"><InstagramLogo weight="bold"/></a><a href="#" aria-label="Facebook"><FacebookLogo weight="fill"/></a><a href="#" aria-label="X"><XLogo weight="bold"/></a></div></div><div><h4>Explore</h4><a href="/services">Services</a><a href="/work">Our work</a><a href="/company">Company</a><a href="/insights">Insights</a></div><div><h4>Say hello</h4><a href="mailto:hello@mangoplustech.com">hello@mangoplustech.com</a><a href="tel:+919999999999">+91 99999 99999</a><span>Gurugram, India</span></div><div className="newsletter"><h4>Good ideas, occasionally.</h4><p>Join our no-spam newsletter.</p><form><input type="email" placeholder="Your email address" aria-label="Your email address"/><button aria-label="Subscribe"><ArrowRight/></button></form></div></div><div className="footer-bottom"><span>© 2026 Mango Plus Tech</span><span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span><span>Made with care in India ♥</span></div></div></footer>
  </main>
}
