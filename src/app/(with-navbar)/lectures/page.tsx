import { Metadata } from 'next';

import LectureNodeDisplay from './lecture-node-display';

import { TITLE_BASE } from '@/constants/metadata';
import { LECTURE_TREE } from '@/course-content/lectures/meta';

export const metadata = {
  title: `${TITLE_BASE} | Lectures`,
} satisfies Metadata;

export default function LecturesPage() {
  return (
    <main>
      <div className="-mt-4">
        {LECTURE_TREE.map((node) => (
          <LectureNodeDisplay node={node} key={node.slug || node.sectionName} />
        ))}
      </div>
    </main>
  );
}
