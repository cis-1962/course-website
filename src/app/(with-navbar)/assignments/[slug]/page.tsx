import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { TITLE_BASE } from '@/constants/metadata';
import { ASSIGNMENTS_ROUTE } from '@/constants/routes';
import assignmentMdx from '@/course-content/assignments/mdx';
import {
  ASSIGNMENT_DATA,
  ASSIGNMENT_SLUGS,
  AssignmentSlug,
} from '@/course-content/assignments/meta';

export function generateStaticParams() {
  return ASSIGNMENT_SLUGS.map((slug) => ({ slug }));
}

const dynamicParams = false;
export { dynamicParams };

export const revalidate = 15;

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: AssignmentSlug };
}) {
  const {
    [slug]: { number, name },
  } = ASSIGNMENT_DATA;
  return {
    title: `${TITLE_BASE} | HW${number} - ${name}`,
  } satisfies Metadata;
}

export default function AssignmentPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // we know slug exists because of dynamicParams option
  const {
    [slug as AssignmentSlug]: { number, name, unlocks },
  } = ASSIGNMENT_DATA;

  // check if assignment unlocked
  if (process.env.NODE_ENV !== 'development' && Date.now() < unlocks) {
    redirect(ASSIGNMENTS_ROUTE);
  }

  const { [slug as AssignmentSlug]: Mdx } = assignmentMdx;
  return (
    <div className="mdx">
      <h1>
        Homework {number} - {name}
      </h1>
      <Mdx />
    </div>
  );
}
