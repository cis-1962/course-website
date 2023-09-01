'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import {
  ASSIGNMENTS_ROUTE,
  DEVELOPMENT_ROUTE,
  SYLLABUS_ROUTE,
  LECTURES_ROUTE,
  STAFF_ROUTE,
  STYLE_ROUTE,
} from '@/constants/routes';
import PennLogo from '@/resources/images/penn-logo';

function NavLink({
  children,
  href,
  exact,
}: {
  children: ReactNode;
  href: string;
  exact?: boolean;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <li>
      <Link
        href={href}
        className={`block rounded-full px-3 py-1 outline-none transition-opacity ${
          isActive
            ? 'font-semibold opacity-100'
            : 'opacity-50 ring-foreground hover:opacity-80 focus-visible:opacity-100 focus-visible:ring-1'
        }`}
        tabIndex={isActive ? -1 : undefined}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <div className="flex items-center pb-8 pt-6 md:pb-10 md:pt-8">
      <div className="mr-8 hidden h-20 lg:block">
        <PennLogo />
      </div>
      <nav>
        <h1 className="font-display text-4xl font-extrabold md:text-5xl">
          CIS-1962: JavaScript Minicourse
        </h1>
        <ul className="-ml-3 mt-2 flex select-none flex-row flex-wrap text-lg tracking-[-0.01em]">
          <NavLink href={SYLLABUS_ROUTE} exact>
            Syllabus
          </NavLink>
          <NavLink href={ASSIGNMENTS_ROUTE}>Assignments</NavLink>
          <NavLink href={LECTURES_ROUTE}>Lectures</NavLink>
          <NavLink href={STAFF_ROUTE}>Staff</NavLink>
          <NavLink href={STYLE_ROUTE}>Style</NavLink>
          <NavLink href={DEVELOPMENT_ROUTE}>Development</NavLink>
        </ul>
      </nav>
    </div>
  );
}
