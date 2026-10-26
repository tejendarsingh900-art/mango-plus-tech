import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import './public-pages.css';
import './audit-refinements.css';
import CmsRuntime from '../components/CmsRuntime';
import MotionEffects from '../components/MotionEffects';
import TawkChat from '../components/TawkChat';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Mango Plus Tech — Digital Growth, Built Better',
  description: 'Web development, SEO, performance marketing and creative digital solutions built to grow modern businesses.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${space.variable}`}><CmsRuntime/><MotionEffects/><TawkChat/>{children}</body></html>;
}
