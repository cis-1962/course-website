'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineChevronRight, HiOutlineLockClosed } from 'react-icons/hi2';

import { LECTURES_ROUTE } from '@/constants/routes';
import { LectureNode, LECTURE_DATA } from '@/course-content/lectures/constants';

function LectureSection({
  node: { children, sectionName },
}: {
  node: { slug?: undefined; sectionName: string; children: LectureNode[] };
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`${collapsed ? '' : ''}`}>
      <button
        type="button"
        onClick={() => {
          setCollapsed((collapsed) => !collapsed);
        }}
        className={`-ml-6 flex select-none flex-row items-center gap-2 font-semibold dark:font-medium ${
          collapsed ? 'mb-4' : ''
        }`}
      >
        <HiOutlineChevronRight
          className={`transition-transform ${
            collapsed ? 'rotate-0' : 'rotate-90'
          }`}
        />
        {sectionName}
      </button>
      {collapsed || (
        <ul className="mb-4 mt-2">
          {children.map((child) => {
            return (
              <li key={child.slug || child.sectionName}>
                <LectureNodeElement node={child} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const dateFormatter = Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: '2-digit',
});

export function LectureNodeElement({ node }: { node: LectureNode }) {
  if (node.slug) {
    // leaf node
    const { name, number, date } = LECTURE_DATA[node.slug];
    const isUnlocked = Date.now() > date;
    const dateString = dateFormatter.format(new Date(date));
    return (
      <div className="flex flex-row items-center gap-2">
        <span className="font-light opacity-50">{dateString}</span>
        {isUnlocked ? (
          <Link
            href={`${LECTURES_ROUTE}/${node.slug}`}
            className="px-2 py-1 underline md:no-underline md:hover:underline md:hover:opacity-80"
          >
            {number}. {name}
          </Link>
        ) : (
          <p className="flex flex-row items-center gap-2 px-2 py-1 opacity-50">
            {number}. {name}
            <HiOutlineLockClosed />
          </p>
        )}
      </div>
    );
  }
  // section
  return (
    <div className="ml-6 mt-4">
      <LectureSection node={node} />
    </div>
  );
}
