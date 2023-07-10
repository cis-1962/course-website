import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { HiOutlineArrowPath } from 'react-icons/hi2';

import Slideshow from './slideshow';

import { TITLE_BASE } from '@/constants/metadata';
import { LECTURES_ROUTE } from '@/constants/routes';
import { lectureMdx } from '@/course-content/lectures/mdx';
import {
  LECTURE_DATA,
  LECTURE_SLUGS,
  LectureSlug,
} from '@/course-content/lectures/meta';

import './slides.scss';

export function generateStaticParams() {
  return LECTURE_SLUGS.map((slug) => ({ slug }));
}

const dynamicParams = false;
export { dynamicParams };

export const revalidate = 15;

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: LectureSlug };
}) {
  const {
    [slug]: { name, number },
  } = LECTURE_DATA;
  return {
    title: `${TITLE_BASE} | Lecture ${number} - ${name}`,
  } satisfies Metadata;
}

function SlideshowFallback() {
  return (
    <div className="mx-auto max-w-4xl animate-appear p-3">
      <div className="flex flex-row py-3 opacity-20 md:items-center">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <div className="h-6 w-[7.5rem] animate-pulse rounded-full bg-foreground" />
          <div className="h-6 w-40 animate-pulse rounded-full bg-foreground md:ml-8" />
        </div>
        <div className="m-2 ml-auto h-6 w-20 animate-pulse rounded-full bg-foreground" />
      </div>
      <div className="flex min-h-[24rem] flex-col items-center justify-center opacity-30">
        <HiOutlineArrowPath className="animate-spin text-3xl" />
      </div>
    </div>
  );
}

export default function LecturePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // we know slug exists because of dynamicParams option
  const {
    [slug as LectureSlug]: { date },
  } = LECTURE_DATA;

  // check if assignment unlocked
  if (Date.now() < date) {
    redirect(LECTURES_ROUTE);
  }

  const { [slug as LectureSlug]: Mdx } = lectureMdx;
  return (
    <Suspense fallback={<SlideshowFallback />}>
      <Slideshow>
        <Mdx />
      </Slideshow>
    </Suspense>
  );
}
