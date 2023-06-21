'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineChevronRight, HiOutlineLockClosed } from 'react-icons/hi2';

import { LectureNode } from './page';

import { LECTURES } from '@/constants/course-data';
import { LECTURES_ROUTE } from '@/constants/routes';

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
        className="flex flex-row items-center gap-2 p-2 font-display text-2xl font-medium"
      >
        <HiOutlineChevronRight
          className={`transition-transform ${
            collapsed ? 'rotate-0' : 'rotate-90'
          }`}
        />
        {sectionName}
      </button>
      {collapsed || (
        <ul className="mb-4 ml-11">
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
    const { name, number, date } = LECTURES[node.slug];
    const isUnlocked = Date.now() > date;
    const dateString = dateFormatter.format(new Date(date));
    return (
      <div className="flex flex-row items-center gap-3">
        <span className="text-sm opacity-50">{dateString}</span>
        {isUnlocked ? (
          <Link
            href={`${LECTURES_ROUTE}/${node.slug}`}
            className="p-2 text-lg underline md:no-underline md:hover:underline md:hover:opacity-80"
          >
            {number} - {name}
          </Link>
        ) : (
          <p className="flex flex-row items-center gap-3 p-2 text-lg opacity-50">
            {number} - {name}
            <HiOutlineLockClosed />
          </p>
        )}
      </div>
    );
  }
  // section
  return <LectureSection node={node} />;
}
