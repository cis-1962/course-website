import { ReactNode } from 'react';

import { Navbar } from '../navbar';

export default function AssignmentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="container mx-auto p-2">
      <Navbar />
      {children}
    </main>
  );
}
