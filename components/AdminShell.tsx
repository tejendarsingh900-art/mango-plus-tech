'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Article, ChartBar, Gear, Globe, Images, List, MagnifyingGlass, SignOut, UserCircle, X } from '@phosphor-icons/react';
import { useState } from 'react';

const links=[
 {href:'/admin',label:'Overview',icon:ChartBar},
 {href:'/admin/content',label:'Pages & Content',icon:Article},
 {href:'/admin/media',label:'Media Library',icon:Images},
 {href:'/admin/seo',label:'SEO Manager',icon:MagnifyingGlass},
 {href:'/admin/settings',label:'Site Settings',icon:Gear},
];
export default function AdminShell({admin,children,logout}:{admin:{name:string;email:string;role:string},children:React.ReactNode,logout:()=>Promise<void>}){const path=usePathname();const[open,setOpen]=useState(false);return <div className="admin-app"><aside className={`admin-sidebar ${open?'open':''}`}><div className="admin-brand"><span><i/><i/><i/></span><div>MANGO+<small>CONTROL</small></div><button onClick={()=>setOpen(false)}><X/></button></div><div className="admin-workspace"><span>WORKSPACE</span><strong>Mango Plus Tech</strong><small>Production website</small></div><nav>{links.map(({href,label,icon:Icon})=><Link onClick={()=>setOpen(false)} key={href} href={href} className={path===href||(href!='/admin'&&path.startsWith(href))?'active':''}><Icon weight={path===href?'fill':'regular'}/><span>{label}</span></Link>)}</nav><div className="admin-sidebar-bottom"><Link href="/" target="_blank"><Globe/>View website</Link><div className="admin-user"><UserCircle weight="fill"/><div><strong>{admin.name}</strong><small>{admin.role}</small></div></div><form action={logout}><button><SignOut/>Logout</button></form></div></aside><div className="admin-main"><header className="admin-topbar"><button className="admin-menu" onClick={()=>setOpen(true)}><List/></button><div><span>CONTENT OPERATING SYSTEM</span><strong>Build. Publish. Grow.</strong></div><Link href="/" target="_blank">Live site <Globe/></Link></header><div className="admin-content">{children}</div></div>{open&&<button className="admin-scrim" onClick={()=>setOpen(false)} aria-label="Close menu"/>}</div>}
