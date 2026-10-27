import type {MetadataRoute} from 'next';
import {blogPosts} from '../lib/blog';
import {locations,locationHref} from '../lib/locations';
import {portfolioProjects} from '../lib/portfolio';
import {primaryServiceSlugs} from '../lib/serviceCatalog';

export default function sitemap():MetadataRoute.Sitemap{
 const base=(process.env.NEXT_PUBLIC_SITE_URL||'https://mangoplustech.com').replace(/\/$/,'');
 const paths=['','/services','/work','/company','/insights','/careers','/contact','/privacy','/terms','/locations','/locations/india','/locations/usa',...primaryServiceSlugs.map(slug=>`/services/${slug}`),...portfolioProjects.map(project=>`/work/${project.slug}`),...blogPosts.map(post=>`/insights/${post.slug}`),...locations.map(location=>locationHref(location))];
 return paths.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:(path.startsWith('/insights/')?'monthly':'weekly') as 'monthly'|'weekly',priority:path===''?1:path.startsWith('/locations/')?0.75:0.8}));
}
