'use client';

import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {FormEvent,useEffect,useRef,useState} from 'react';
import {ArrowRight,X} from '@phosphor-icons/react';
import s from './lead-capture-popup.module.css';

const STORAGE_KEY='mango-lead-popup-seen';

export default function LeadCapturePopup(){
 const pathname=usePathname();
 const router=useRouter();
 const panel=useRef<HTMLDivElement>(null);
 const[open,setOpen]=useState(false);

 useEffect(()=>{
  if(pathname.startsWith('/admin')||pathname==='/contact'||sessionStorage.getItem(STORAGE_KEY))return;
  const timer=window.setTimeout(()=>setOpen(true),12000);
  return()=>window.clearTimeout(timer);
 },[pathname]);

 useEffect(()=>{
  if(!open)return;
  const previous=document.body.style.overflow;
  document.body.style.overflow='hidden';
  const closeOnEscape=(event:KeyboardEvent)=>{if(event.key==='Escape')close()};
  document.addEventListener('keydown',closeOnEscape);
  window.setTimeout(()=>panel.current?.querySelector<HTMLInputElement>('input')?.focus(),60);
  return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',closeOnEscape)};
 },[open]);

 const close=()=>{sessionStorage.setItem(STORAGE_KEY,'1');setOpen(false)};
 const submit=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  sessionStorage.setItem(STORAGE_KEY,'1');
  const query=new URLSearchParams();
  ['name','email','phone','website'].forEach(key=>{const value=String(data.get(key)||'').trim();if(value)query.set(key,value)});
  query.set('service','Website development');
  setOpen(false);
  router.push(`/contact?${query.toString()}#project-form`);
 };

 if(!open)return null;
 return <div className={s.overlay} role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)close()}}><div ref={panel} className={s.panel} role="dialog" aria-modal="true" aria-labelledby="lead-popup-title"><div className={s.accent}/><button className={s.close} type="button" onClick={close} aria-label="Close enquiry form"><X weight="bold"/></button><span className={s.eyebrow}>FREE DIGITAL GROWTH REVIEW</span><h2 id="lead-popup-title">Ready to uncover your next growth opportunity?</h2><p>Share a few details and we’ll help you identify a practical, high-impact next step for your website or digital presence.</p><form onSubmit={submit}><label><span>Full name</span><input required name="name" autoComplete="name" placeholder="Full name"/></label><label><span>Email address</span><input required type="email" name="email" autoComplete="email" placeholder="you@company.com"/></label><div className={s.row}><label><span>Phone number</span><input type="tel" name="phone" autoComplete="tel" placeholder="+91 99999 99999"/></label><label><span>Website</span><input name="website" inputMode="url" placeholder="yourwebsite.com"/></label></div><label className={s.consent}><input required type="checkbox" name="consent"/><span>I agree to Mango Plus Tech contacting me about this enquiry. Read our <Link href="/privacy" onClick={close}>privacy policy</Link>.</span></label><button className={s.submit} type="submit">Get my free review <ArrowRight weight="bold"/></button></form><small>No spam. Just a focused conversation about your next step.</small></div></div>;
}
