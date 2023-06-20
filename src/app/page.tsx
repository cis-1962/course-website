import type { Metadata } from 'next';

import Home from './home.mdx';
import { Navbar } from './navbar';

import { TITLE_BASE } from '@/constants/metadata';

export const metadata = {
  title: `${TITLE_BASE} | Home`,
} satisfies Metadata;

export default function HomePage() {
  return (
    <div className="container mx-auto p-2">
      <Navbar />
      <main className="mdx mb-24">
        <Home />
      </main>
    </div>
  );
}
