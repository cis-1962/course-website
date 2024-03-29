'use client';

import Link from 'next/link';
import { createContext, useContext, useEffect, useState } from 'react';
import { HiOutlineChevronRight, HiOutlineLockClosed } from 'react-icons/hi2';

import { LECTURES_ROUTE } from '@/constants/routes';
import {
  LECTURE_DATA,
  LECTURE_TREE,
  LectureNode,
} from '@/course-content/lectures/meta';

const currentTimeContext = createContext<number | undefined>(undefined);

export default function LectureTree() {
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
    <div className="-mt-4">
      <currentTimeContext.Provider value={currentTime}>
        {LECTURE_TREE.map((node) => (
          <LectureNodeDisplay node={node} key={node.slug ?? node.sectionName} />
        ))}
      </currentTimeContext.Provider>
    </div>
  );
}

function LectureSection({
  node: { children, sectionName },
}: {
  node: { slug?: undefined; sectionName: string; children: LectureNode[] };
}) {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? '' : ''}`}>
      <button
        type="button"
        onClick={() => {
          setCollapsed((collapsed) => !collapsed);
        }}
        className={`-ml-6 flex select-none flex-row items-center gap-2 font-semibold dark:font-medium ${
          isCollapsed ? 'mb-4' : ''
        }`}
      >
        <HiOutlineChevronRight
          className={`transition-transform ${
            isCollapsed ? 'rotate-0' : 'rotate-90'
          }`}
        />
        {sectionName}
      </button>
      {isCollapsed || (
        <ul className="mb-4 mt-2">
          {children.map((child) => (
            <li key={child.slug || child.sectionName}>
              <LectureNodeDisplay node={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const dateFormatter = Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: '2-digit',
});

function LectureNodeDisplay({ node }: { node: LectureNode }) {
  const { slug } = node;
  const currentTime = useContext(currentTimeContext);

  if (slug) {
    // leaf node
    const {
      [slug]: { name, number, date },
    } = LECTURE_DATA;

    const isUnlocked =
      process.env.NODE_ENV === 'development' ||
      (currentTime !== undefined && currentTime > date);

    const dateString = dateFormatter.format(new Date(date));
    return (
      <div className="flex flex-row items-center gap-2">
        <span className="font-light tabular-nums opacity-50">{dateString}</span>
        {isUnlocked ? (
          <Link
            href={`${LECTURES_ROUTE}/${slug}`}
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
