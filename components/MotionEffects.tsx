'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MotionEffects(){
  const pathname=usePathname();
  useEffect(()=>{
    if(pathname.startsWith('/admin'))return;
    const items=Array.from(document.querySelectorAll<HTMLElement>('body > main > section, body > main > article, body > main > footer'));
    document.body.classList.add('motion-ready');
    items.forEach((item,index)=>{item.classList.add('reveal-motion',`motion-${index%5+1}`)});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-inview');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -7%'});
    items.forEach(item=>observer.observe(item));
    return()=>{observer.disconnect();items.forEach(item=>item.classList.remove('reveal-motion','motion-1','motion-2','motion-3','motion-4','motion-5','is-inview'));document.body.classList.remove('motion-ready')};
  },[pathname]);
  return null;
}
