import { Metadata } from 'next';

import AssignmentList from './assignment-list';

import { TITLE_BASE } from '@/constants/metadata';

export const metadata = {
  title: `${TITLE_BASE} | Assigments`,
} satisfies Metadata;

export default function AssignmentsPage() {
  return (
    <main>
      <AssignmentList />
    </main>
  );
}
