'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineLockClosed } from 'react-icons/hi2';

import { ASSIGNMENTS_ROUTE } from '@/constants/routes';
import {
  ASSIGNMENT_DATA,
  AssignmentSlug,
} from '@/course-content/assignments/meta';

export default function AssignmentList() {
  const [currentTime, setCurrentTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    setCurrentTime(Date.now());

    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ul className="select-none grid-flow-row grid-cols-[auto_1fr_auto_auto] items-center gap-y-4 md:grid">
      {Object.entries(ASSIGNMENT_DATA).map(([slug, data]) => (
        <AssignmentEntry
          key={slug}
          slug={slug}
          data={data}
          currentTime={currentTime}
        />
      ))}
    </ul>
  );
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'numeric',
  day: 'numeric',
  timeZone: 'EST',
});

const spanFormatter = new Intl.RelativeTimeFormat('en-US', { style: 'long' });

const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;

function formatDaysTill(currentTime: number, time: number) {
  const baseDate = dateFormatter.format(time);
  const timeTill = time - currentTime;

  if (timeTill <= 0) {
    return baseDate;
  }

  if (timeTill < oneHour) {
    return `${baseDate} (${spanFormatter.format(
      Math.ceil(timeTill / oneMinute),
      'minutes'
    )})`;
  }
  if (timeTill < oneDay) {
    return `${baseDate} (${spanFormatter.format(
      Math.ceil(timeTill / oneHour),
      'hours'
    )})`;
  }

  return baseDate;
}

function AssignmentEntry({
  slug,
  data: { name, number, unlocks, due },
  currentTime,
}: {
  slug: string;
  data: (typeof ASSIGNMENT_DATA)[AssignmentSlug];
  currentTime: number | undefined;
}) {
  const isUnlocked =
    process.env.NODE_ENV === 'development' ||
    (currentTime !== undefined && unlocks < currentTime);

  return (
    <>
      <div
        key={`${slug}-num`}
        className="mr-8 hidden font-light opacity-50 md:block"
      >
        {number}
      </div>
      <li
        key={`${slug}-li`}
        className={`${isUnlocked ? 'font-semibold dark:font-medium' : ''}`}
      >
        {isUnlocked ? (
          <Link
            href={`${ASSIGNMENTS_ROUTE}/${slug}`}
            className="underline md:no-underline md:hover:underline md:hover:opacity-80"
          >
            {name}
          </Link>
        ) : (
          <div className="flex flex-row items-center gap-3 opacity-50">
            {name} <HiOutlineLockClosed />
          </div>
        )}
      </li>
      <div key={`${slug}-unlocks`} className="font-light dark:font-extralight">
        {isUnlocked || `Unlocks ${dateFormatter.format(unlocks)}`}
      </div>
      <div
        key={`${slug}-due`}
        className={`mb-4 font-light dark:font-extralight md:mb-0 md:ml-8 ${
          isUnlocked ? '' : 'opacity-50'
        }`}
      >
        Due {formatDaysTill(currentTime ?? 0, due)}
      </div>
    </>
  );
}
