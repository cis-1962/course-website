import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import hw01 from './mdx/1-data-wrangling.mdx';

import { ASSIGNMENTS, AssignmentSlug, TITLE_BASE } from '@/constants/metadata';
import { ASSIGNMENTS_ROUTE } from '@/constants/routes';

const homeworkMdx: { [key in AssignmentSlug]: (props: any) => JSX.Element } = {
  '1-data-wrangling': hw01,
  '2-async-events': hw01,
};

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
  // check slug exists
  if (!Object.keys(ASSIGNMENTS).includes(slug)) {
    notFound();
  }
  const { number, name, unlocks } = ASSIGNMENTS[slug as AssignmentSlug];

  // check if assignment unlocked
  if (Date.now() < unlocks) {
    redirect(ASSIGNMENTS_ROUTE);
  }

  const Mdx = homeworkMdx[slug as AssignmentSlug];
  return (
    <div className="mdx">
      <h1>
        Homework {number} - {name}
      </h1>
      <Mdx />
    </div>
  );
}
