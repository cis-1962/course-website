'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import {
  ASSIGNMENTS_ROUTE,
  DEVELOPMENT_ROUTE,
  HOME_ROUTE,
  LECTURES_ROUTE,
  STAFF_ROUTE,
  STYLE_ROUTE,
} from '@/constants/routes';
import { PennLogo } from '@/resources/images/penn-logo';

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
        className={`rounded-full px-3 py-2 text-lg font-medium ring-0 transition-opacity ${
          isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

export function Navbar() {
  return (
    <div className="flex items-center pb-8 pt-6 md:pb-10 md:pt-8">
      <div className="mr-8 hidden h-20 lg:block">
        <PennLogo />
      </div>
      <nav>
        <h1 className="font-display text-4xl font-extrabold md:text-5xl">
          CIS-1962: JavaScript Minicourse
        </h1>
        <ul className="-ml-3 mt-2 flex flex-row flex-wrap">
          <NavLink href={HOME_ROUTE} exact>
            Home
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
