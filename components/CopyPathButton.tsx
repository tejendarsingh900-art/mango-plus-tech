'use client';
import {useState} from 'react';
import {Copy,Check} from '@phosphor-icons/react';
export default function CopyPathButton({path}:{path:string}){
 const [copied,setCopied]=useState(false),[failed,setFailed]=useState(false);
 async function copy(){try{await navigator.clipboard.writeText(path);setCopied(true);setFailed(false);setTimeout(()=>setCopied(false),2000)}catch{setFailed(true)}}
 return <><button type="button" aria-label={copied?'Path copied':'Copy image path'} title={copied?'Copied':'Copy image path'} onClick={copy}>{copied?<Check/>:<Copy/>}</button>{failed&&<small role="status">Select and copy the path above.</small>}</>;
}
