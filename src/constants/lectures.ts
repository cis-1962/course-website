export const LECTURE_SLUGS = ['0-course-policies', '1-js-basics'] as const;
export type LectureSlug = (typeof LECTURE_SLUGS)[number];

export const LECTURE_DATA: {
  [slug in LectureSlug]: { name: string; number: number; date: number };
} = {
  '0-course-policies': {
    name: 'Course Policies',
    number: 0,
    date: Date.parse('01 June 2023 19:00:00 EST'),
  },
  '1-js-basics': {
    name: 'JavaScript Basics',
    number: 1,
    date: Date.parse('25 June 2023 19:00:00 EST'),
  },
} as const;

export type LectureNode =
  | { slug: LectureSlug }
  | { slug?: undefined; sectionName: string; children: LectureNode[] };

export const LECTURE_TREE: LectureNode[] = [
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
