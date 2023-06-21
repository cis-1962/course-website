'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  HiOutlineArrowLeft,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi2';

import { LECTURES, LectureSlug } from '@/constants/metadata';
import { LECTURES_ROUTE } from '@/constants/routes';

export default function Slideshow({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const slides = useMemo(() => {
    const generatedSlides: { slide: ReactNode[]; className?: string }[] = [];

    const childrenArray = React.Children.toArray(children);
    let currentGeneratingSlide: ReactNode[] = [];
    for (const child of childrenArray) {
      if (child && (child as { type?: string }).type === 'hr') {
        // check for class list
        if (currentGeneratingSlide[0] === '\n') {
          currentGeneratingSlide.splice(0, 1);
        }
        const classString: string | undefined = (
          currentGeneratingSlide[0] as { props?: { [key: string]: any } }
        )?.props?.children; // ?.[0] as string | undefined;
        let className = '';
        if (classString && classString.startsWith('class:')) {
          currentGeneratingSlide.splice(0, 1);
          const split = classString.slice(7).split(',');
          className = split.join(' ');
        }
        generatedSlides.push({ slide: currentGeneratingSlide, className });
        currentGeneratingSlide = [];
      } else {
        currentGeneratingSlide.push(child);
      }
    }
    return generatedSlides;
  }, [children]);

  // get slide from url
  const urlSlide = useMemo(() => {
    try {
      const slideString = searchParams.get('slide');
      if (!slideString) throw 'argh';
      const parsed = Number.parseInt(slideString);
      if (Number.isNaN(parsed)) throw 'aargh';
      return Math.max(Math.min(parsed - 1, slides.length - 1), 0);
    } catch {
      return 0;
    }
  }, [searchParams, slides.length]);

  // current slide state
  const [currentSlide, setCurrentSlide] = useState(urlSlide);

  // util for updating url
  const createQueryString = useCallback(
    (pairs: { [key: string]: string }) => {
      const params = new URLSearchParams(
        // NOTE: we can do this evil cast because this is in Next docs
        searchParams as any as URLSearchParams
      );
      for (const [key, value] of Object.entries(pairs)) {
        params.set(key, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  // update query string
  useEffect(() => {
    router.replace(
      `${pathname}?${createQueryString({
        slide: (currentSlide + 1).toString(),
      })}`
    );
  }, [currentSlide, createQueryString, pathname, router]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((slide) => Math.min(slide + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((slide) => Math.max(slide - 1, 0));
  }, []);

  // set up key bindings
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === ' ' || event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'Backspace' || event.key === 'ArrowLeft') {
        prevSlide();
      }
    }
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [slides.length, nextSlide, prevSlide]);

  const { number, name } = LECTURES[pathname.split('/').pop() as LectureSlug];

  return (
    <div className="mx-auto max-w-4xl p-2">
      <nav className="my-4 mb-4 flex gap-2 text-sm font-light">
        <div className="items-center sm:flex">
          <Link
            href={LECTURES_ROUTE}
            className="-ml-3 flex items-center rounded-full px-3 py-1 underline opacity-50 outline-none ring-foreground transition-opacity focus-visible:opacity-100 focus-visible:ring-1 sm:no-underline sm:hover:opacity-100"
          >
            <HiOutlineArrowLeft className="mr-2" />
            Exit Slideshow
          </Link>
          <div className="opacity-50 sm:ml-8">
            Lecture {number} - {name}
          </div>
        </div>
        <div className="ml-auto flex flex-row items-center gap-1">
          <button
            type="button"
            onClick={() => {
              prevSlide();
            }}
            className="rounded-full p-2 opacity-50 outline-none ring-foreground transition-opacity focus-visible:opacity-100 focus-visible:ring-1 sm:hover:opacity-100"
          >
            <HiOutlineChevronLeft />
          </button>
          <div className="min-w-[24px] text-center opacity-50">
            {currentSlide + 1}
          </div>
          <button
            type="button"
            onClick={() => {
              nextSlide();
            }}
            className="rounded-full p-2 opacity-50 outline-none ring-foreground transition-opacity focus-visible:opacity-100 focus-visible:ring-1 sm:hover:opacity-100"
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      </nav>
      <main className={`mdx slides ${slides[currentSlide].className}`}>
        {slides[currentSlide].slide}
      </main>
    </div>
  );
}
