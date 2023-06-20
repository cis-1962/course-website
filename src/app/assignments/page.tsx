import { Metadata } from 'next';
import Link from 'next/link';

import { ASSIGNMENTS, TITLE_BASE } from '@/constants/metadata';
import { ASSIGNMENTS_ROUTE } from '@/constants/routes';

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
      <ul className="mb-24 select-none grid-flow-row grid-cols-[auto_1fr_auto_auto] items-center gap-y-4 md:grid">
        {Object.entries(ASSIGNMENTS).map(
          ([slug, { name, number, unlocks, due }]) => {
            const isUnlocked = unlocks < Date.now();
            const isDue = due < Date.now();
            return (
              <>
                <div
                  key={`${slug}-num`}
                  className="mr-8 hidden opacity-50 md:block"
                >
                  {number}
                </div>
                <li key={`${slug}-li`} className="text-xl font-medium">
                  {isUnlocked ? (
                    <Link
                      href={`${ASSIGNMENTS_ROUTE}/${slug}`}
                      className="underline md:no-underline md:hover:underline md:hover:opacity-80"
                    >
                      {name}
                    </Link>
                  ) : (
                    <div className="opacity-50">🔒 {name}</div>
                  )}
                </li>
                <div key={`${slug}-unlocks`} className="">
                  {isUnlocked || `Unlocks ${formatDaysTill(unlocks)}`}
                </div>
                <div
                  key={`${slug}-due`}
                  className={`mb-4 md:mb-0 md:ml-8 ${
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
