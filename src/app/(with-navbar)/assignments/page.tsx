import { Metadata } from 'next';
import Link from 'next/link';
import { HiOutlineLockClosed } from 'react-icons/hi2';

import { TITLE_BASE } from '@/constants/metadata';
import { ASSIGNMENTS_ROUTE } from '@/constants/routes';
import { ASSIGNMENT_DATA } from '@/course-content/assignments/constants';

export const metadata = {
  title: `${TITLE_BASE} | Assigments`,
} satisfies Metadata;

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'numeric',
  day: 'numeric',
  weekday: 'long',
  timeZone: 'EST',
});

const spanFormatter = new Intl.RelativeTimeFormat('en-US', { style: 'long' });

const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
// TODO: make sure this works with our static export solution
function formatDaysTill(time: number) {
  const baseDate = dateFormatter.format(time);
  const timeTill = time - Date.now();
  if (timeTill < oneDay && timeTill > 0) {
    return `${baseDate} (${spanFormatter.format(
      Math.ceil(timeTill / oneHour),
      'hours'
    )})`;
  }
  return baseDate;
}

export default function AssignmentsPage() {
  return (
    <>
      <ul className="select-none grid-flow-row grid-cols-[auto_1fr_auto_auto] items-center gap-y-4 md:grid">
        {Object.entries(ASSIGNMENT_DATA).map(
          ([slug, { name, number, unlocks, due }]) => {
            const isUnlocked = unlocks < Date.now();
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
                  className={`${
                    isUnlocked ? 'font-semibold dark:font-medium' : ''
                  }`}
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
                <div
                  key={`${slug}-unlocks`}
                  className="font-light dark:font-extralight"
                >
                  {isUnlocked || `Unlocks ${formatDaysTill(unlocks)}`}
                </div>
                <div
                  key={`${slug}-due`}
                  className={`mb-4 font-light dark:font-extralight md:mb-0 md:ml-8 ${
                    isUnlocked ? '' : 'opacity-50'
                  }`}
                >
                  Due {formatDaysTill(due)}
                </div>
              </>
            );
          }
        )}
      </ul>
    </>
  );
}
