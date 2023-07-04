import { Metadata } from 'next';

import { LectureNodeElement } from './lectures-ui';

import { LECTURE_TREE } from '@/constants/lectures';
import { TITLE_BASE } from '@/constants/metadata';

export const metadata = {
  title: `${TITLE_BASE} | Lectures`,
} satisfies Metadata;

export default function LecturesPage() {
  return (
    <main>
      <div className="-mt-4">
        {LECTURE_TREE.map((node) => (
          <LectureNodeElement node={node} key={node.slug || node.sectionName} />
        ))}
      </div>
    </main>
  );
}
