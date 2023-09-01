import { Metadata } from 'next';

import LectureTree from './lecture-tree';

import { TITLE_BASE } from '@/constants/metadata';

export const metadata = {
  title: `${TITLE_BASE} | Lectures`,
} satisfies Metadata;

export default function LecturesPage() {
  return (
    <main>
      <LectureTree />
    </main>
  );
}
