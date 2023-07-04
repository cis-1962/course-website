import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import {
  ASSIGNMENT_DATA,
  ASSIGNMENT_SLUGS,
  AssignmentSlug,
} from '@/constants/assignments';
import { TITLE_BASE } from '@/constants/metadata';
import { ASSIGNMENTS_ROUTE } from '@/constants/routes';
import { assignmentMdx } from '@/markdown/assignments/mdx';

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
  const { number, name } = ASSIGNMENT_DATA[slug];
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
  const { number, name, unlocks } = ASSIGNMENT_DATA[slug as AssignmentSlug];

  // check if assignment unlocked
  if (Date.now() < unlocks) {
    redirect(ASSIGNMENTS_ROUTE);
  }

  const Mdx = assignmentMdx[slug as AssignmentSlug];
  return (
    <div className="mdx">
      <h1>
        Homework {number} - {name}
      </h1>
      <Mdx />
    </div>
  );
}
