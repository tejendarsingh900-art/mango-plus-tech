import {NextRequest,NextResponse} from 'next/server';
import {searchSite} from '../../../lib/search';
export const dynamic='force-dynamic';
export function GET(request:NextRequest){const query=(request.nextUrl.searchParams.get('q')||'').trim().slice(0,100);return NextResponse.json({query,results:searchSite(query)},{headers:{'Cache-Control':'no-store'}})}
