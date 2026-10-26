'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
type TawkApi={onLoad?:()=>void;showWidget?:()=>void;hideWidget?:()=>void;customStyle?:unknown};
declare global{interface Window{Tawk_API?:TawkApi;Tawk_LoadStart?:Date}}
export default function TawkChat(){
 const pathname=usePathname();
 useEffect(()=>{
  const privatePage=pathname==='/admin'||pathname.startsWith('/admin/');
  if(privatePage){window.Tawk_API?.hideWidget?.();return}
  const api=window.Tawk_API=window.Tawk_API||{};
  api.onLoad=()=>{if(location.pathname==='/admin'||location.pathname.startsWith('/admin/'))api.hideWidget?.();else api.showWidget?.()};
  if(document.getElementById('mango-tawk-chat')){api.showWidget?.();return}
  api.customStyle={visibility:{desktop:{position:'br',xOffset:20,yOffset:20},mobile:{position:'br',xOffset:16,yOffset:16}}};
  window.Tawk_LoadStart=new Date();
  const script=document.createElement('script');script.id='mango-tawk-chat';script.async=true;script.src='https://embed.tawk.to/629dc4ddb0d10b6f3e75e57c/1k5skk1o2';script.charset='UTF-8';script.setAttribute('crossorigin','*');
  script.onerror=()=>script.remove();
  document.head.appendChild(script);
 },[pathname]);
 return null;
}
