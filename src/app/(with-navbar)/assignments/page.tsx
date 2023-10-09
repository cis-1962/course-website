import { Metadata } from 'next';

import Credit from '../credit';

import AssignmentList from './assignment-list';

import { makeTitle } from '@/constants/metadata';

export const metadata = {
  title: makeTitle('Assigments'),
} satisfies Metadata;

export default function AssignmentsPage() {
  return (
    <main>
      <Credit />
      <AssignmentList />
    </main>
  );
}
