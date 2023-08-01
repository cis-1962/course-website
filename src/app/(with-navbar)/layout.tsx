import { ReactNode } from 'react';

import Navbar from './navbar';

export default function NormalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto mb-24 p-3">
      <Navbar />
      {children}
    </div>
  );
}
