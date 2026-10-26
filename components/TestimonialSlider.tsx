'use client';
import {useCallback,useEffect,useLayoutEffect,useRef,useState} from 'react';
import {CaretLeft,CaretRight} from '@phosphor-icons/react';
import s from './reference-home.module.css';

export default function TestimonialSlider({reviews}:{reviews:string[][]}){
 const count=reviews.length;
 const [index,setIndex]=useState(count),[step,setStep]=useState(0),[visible,setVisible]=useState(3),[animate,setAnimate]=useState(false),[paused,setPaused]=useState(false);
 const viewport=useRef<HTMLDivElement>(null),track=useRef<HTMLDivElement>(null),busy=useRef(false),touch=useRef<number|null>(null);
 useLayoutEffect(()=>{const el=viewport.current;if(!el)return;const measure=()=>{const card=track.current?.querySelector('article');if(!card||!track.current)return;const gap=parseFloat(getComputedStyle(track.current).columnGap)||0;setStep(card.getBoundingClientRect().width+gap);setVisible(window.innerWidth<=760?1:window.innerWidth<=1100?2:3);setAnimate(false);setIndex(count);busy.current=false};measure();const observer=new ResizeObserver(measure);observer.observe(el);return()=>observer.disconnect()},[count]);
 useEffect(()=>{if(animate)return;let second=0;const first=requestAnimationFrame(()=>{second=requestAnimationFrame(()=>setAnimate(true))});return()=>{cancelAnimationFrame(first);cancelAnimationFrame(second)}},[animate,step]);
 const move=useCallback((direction:number)=>{if(busy.current||!step)return;busy.current=true;setAnimate(true);setIndex(i=>i+direction)},[step]);
 const finish=useCallback(()=>{busy.current=false;if(index>=count*2||index<count){setAnimate(false);setIndex(i=>i>=count*2?i-count:i+count)}},[index,count]);
 useEffect(()=>{if(!busy.current)return;const timer=setTimeout(finish,800);return()=>clearTimeout(timer)},[index,finish]);
 useEffect(()=>{if(paused)return;const timer=setInterval(()=>{if(!document.hidden)move(1)},5000);return()=>clearInterval(timer)},[move,paused]);
 const cards=[...reviews,...reviews,...reviews];
 return <section className={`${s.section} ${s.testimonials}`} aria-label="Client testimonials"><div className={s.container}>
  <div className={s.sectionHead}><div><span className={s.label}>CLIENT TESTIMONIALS</span><h2>What Our Clients Say</h2></div><div className={s.controls}><button aria-label="Previous testimonial" onClick={()=>move(-1)}><CaretLeft/></button><button aria-label="Next testimonial" onClick={()=>move(1)}><CaretRight/></button></div></div>
  <div ref={viewport} className={s.reviewViewport} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onTouchStart={e=>{touch.current=e.touches[0].clientX;setPaused(true)}} onTouchEnd={e=>{if(touch.current!==null){const distance=touch.current-e.changedTouches[0].clientX;if(Math.abs(distance)>45)move(distance>0?1:-1)}touch.current=null;setPaused(false)}}>
   <div ref={track} className={`${s.reviewGrid} ${s.reviewTrack}`} style={{transform:`translate3d(${-index*step}px,0,0)`,transition:animate?'transform 650ms cubic-bezier(.22,.7,.25,1)':'none',visibility:step?'visible':'hidden'}} onTransitionEnd={e=>{if(e.target===e.currentTarget&&e.propertyName==='transform')finish()}}>
    {cards.map((r,i)=><article key={`${r[1]}-${i}`} aria-hidden={i<index||i>=index+visible}><p><span>“</span>{r[0]}</p><div className={s.stars} aria-label="5 out of 5 stars">★★★★★</div><div className={s.reviewer}><span>{r[1].split(' ').map(n=>n[0]).join('')}</span><div><strong>{r[1]}</strong><small>{r[2]}</small></div></div></article>)}
   </div>
  </div>
 </div></section>
}
