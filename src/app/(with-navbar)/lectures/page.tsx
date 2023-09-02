import { Metadata } from 'next';

import Credit from '../credit';

import LectureTree from './lecture-tree';

import { TITLE_BASE } from '@/constants/metadata';

export const metadata = {
  title: `${TITLE_BASE} | Lectures`,
} satisfies Metadata;

export default function LecturesPage() {
  return (
    <main>
      <Credit />
      <LectureTree />
    </main>
  );
}
