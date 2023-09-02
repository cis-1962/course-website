import { Metadata } from 'next';

import Credit from '../credit';

import AssignmentList from './assignment-list';

import { TITLE_BASE } from '@/constants/metadata';

export const metadata = {
  title: `${TITLE_BASE} | Assigments`,
} satisfies Metadata;

export default function AssignmentsPage() {
  return (
    <main>
      <Credit />
      <AssignmentList />
    </main>
  );
}
