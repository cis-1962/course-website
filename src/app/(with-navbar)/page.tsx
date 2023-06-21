import type { Metadata } from 'next';

import Home from './home.mdx';

import { TITLE_BASE } from '@/constants/metadata';

export const metadata = {
  title: `${TITLE_BASE} | Home`,
} satisfies Metadata;

export default function HomePage() {
  return (
    <main className="mdx">
      <Home />
    </main>
  );
}
