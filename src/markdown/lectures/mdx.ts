import { default as lec00 } from './0-course-policies.mdx';

import { LectureSlug } from '@/constants/lectures';

export const lectureMdx: { [key in LectureSlug]: (props: any) => JSX.Element } =
  {
    '0-course-policies': lec00,
    '1-js-basics': lec00,
  };
