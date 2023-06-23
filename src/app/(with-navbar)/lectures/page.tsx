import { Metadata } from 'next';

import { LectureNodeElement } from './lectures-ui';

import { LectureSlug } from '@/constants/course-data';
import { TITLE_BASE } from '@/constants/metadata';

export const metadata = {
  title: `${TITLE_BASE} | Lectures`,
} satisfies Metadata;

export type LectureNode =
  | { slug: LectureSlug }
  | { slug?: undefined; sectionName: string; children: LectureNode[] };

const lectureTree: LectureNode[] = [
  {
    sectionName: 'Example Section 1',
    children: [{ slug: '0-course-policies' }, { slug: '1-js-basics' }],
  },
  {
    sectionName: 'Example Section 2 Baby',
    children: [
      { slug: '0-course-policies' },
      {
        sectionName: 'Example Subsection Bro',
        children: [{ slug: '1-js-basics' }],
      },
    ],
  },
];

export default function LecturesPage() {
  return (
    <main>
      <div className="-mt-4">
        {lectureTree.map((node) => (
          <LectureNodeElement node={node} key={node.slug || node.sectionName} />
        ))}
      </div>
    </main>
  );
}
