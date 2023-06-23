import hw01 from './1-data-wrangling.mdx';

import { AssignmentSlug } from '@/constants/course-data';

export const assignmentMdx: {
  [key in AssignmentSlug]: (props: any) => JSX.Element;
} = {
  '1-data-wrangling': hw01,
  '2-async-events': hw01,
};
