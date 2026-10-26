'use client';
import Link from 'next/link';
export default function AdminError({reset}:{error:Error & {digest?:string};reset:()=>void}){return <main className="auth-page"><section className="auth-panel"><div role="alert"><span>ADMIN WORKSPACE</span><h1>We couldn’t open the workspace.</h1><p>The database connection or workspace configuration may be unavailable. Check the server configuration, then try again.</p><button type="button" onClick={reset}>Try again</button><p><Link href="/">Return to website</Link></p></div></section></main>}
