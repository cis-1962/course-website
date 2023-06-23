import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { ASSIGNMENTS, AssignmentSlug } from '@/constants/course-data';
import { TITLE_BASE } from '@/constants/metadata';
import { ASSIGNMENTS_ROUTE } from '@/constants/routes';
import { assignmentMdx } from '@/markdown/assignments/mdx';

export function generateStaticParams() {
  return Object.keys(ASSIGNMENTS).map((slug) => ({
    slug,
  }));
}

export const dynamicParams = false;

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: AssignmentSlug };
}) {
  const { number, name } = ASSIGNMENTS[slug];
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
  const { number, name, unlocks } = ASSIGNMENTS[slug as AssignmentSlug];

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
