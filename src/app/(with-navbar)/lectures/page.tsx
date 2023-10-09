import { Metadata } from 'next';

import Credit from '../credit';

import LectureTree from './lecture-tree';

import { makeTitle } from '@/constants/metadata';

export const metadata = {
  title: makeTitle('Lectures'),
} satisfies Metadata;

export default function LecturesPage() {
  return (
    <main>
      <Credit />
      <LectureTree />
    </main>
  );
}
