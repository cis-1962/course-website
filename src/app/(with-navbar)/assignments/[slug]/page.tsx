import { Metadata } from 'next';

import Redirector from '@/components/redirector';
import { makeTitle } from '@/constants/metadata';
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

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: AssignmentSlug };
}) {
  const {
    [slug]: { number, name },
  } = ASSIGNMENT_DATA;
  return {
    title: makeTitle(`HW${number} - ${name}`),
  } satisfies Metadata;
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  timeZone: 'EST',
  hour: 'numeric',
  hour12: true,
  minute: 'numeric',
});

export default function AssignmentPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // we know slug exists because of static export
  const {
    [slug as AssignmentSlug]: { number, name, unlocks, due },
  } = ASSIGNMENT_DATA;

  const { [slug as AssignmentSlug]: Mdx } = assignmentMdx;
  return (
    <main>
      <h1 className="font-display text-4xl font-bold tracking-tight">
        Homework {number} - {name}
      </h1>
      <h3 className="mt-1 tracking-wide text-neutral-500 dark:text-neutral-400">
        Due {dateFormatter.format(due)}
      </h3>
      <div className="mdx mt-6">
        <Mdx />
      </div>
      <Redirector minDate={new Date(unlocks)} redirectTo={ASSIGNMENTS_ROUTE} />
    </main>
  );
}
