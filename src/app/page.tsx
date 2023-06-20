import type { Metadata } from 'next';

import Home from './home.mdx';
import { Navbar } from './navbar';

import { TITLE_BASE } from '@/constants/names';

export const metadata = {
  title: `${TITLE_BASE} | Home`,
} satisfies Metadata;

export default function HomePage() {
  return (
    <div className="container mx-auto p-2">
      <Navbar />
      <main className="mdx mb-24 mt-4 flex flex-col gap-4">
        <Home />
      </main>
    </div>
  );
}
