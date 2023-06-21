import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import lec00 from './mdx/0-course-policies.mdx';
import Slideshow from './slideshow';

import { LECTURES, LectureSlug, TITLE_BASE } from '@/constants/metadata';
import { LECTURES_ROUTE } from '@/constants/routes';

import './slides.scss';

const lectureMdx: { [key in LectureSlug]: (props: any) => JSX.Element } = {
  '0-course-policies': lec00,
  '1-js-basics': lec00,
};

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: LectureSlug };
}) {
  const { name, number } = LECTURES[slug];
  return {
    title: `${TITLE_BASE} | Lecture ${number} - ${name}`,
  } satisfies Metadata;
}

export default function LecturePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // check slug exists
  if (!Object.keys(LECTURES).includes(slug)) {
    notFound();
  }
  const { date } = LECTURES[slug as LectureSlug];

  // check if assignment unlocked
  if (Date.now() < date) {
    redirect(LECTURES_ROUTE);
  }

  const Mdx = lectureMdx[slug as LectureSlug];
  return (
    <Slideshow>
      <Mdx />
    </Slideshow>
  );
}
