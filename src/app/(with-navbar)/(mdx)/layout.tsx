import { ReactNode } from 'react';

export default function MDXLayout({ children }: { children: ReactNode }) {
  return <main className="mdx">{children}</main>;
}
