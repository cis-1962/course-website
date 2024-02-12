import { Metadata } from 'next';

import Credit from '../credit';

import LectureTree from './lecture-tree';

import Alert from '@/components/alert';
import { makeTitle } from '@/constants/metadata';
import { CLASS_RECORDINGS_URL, LIVE_CODE_URL } from '@/constants/per-semester';

export const metadata = {
  title: makeTitle('Lectures'),
} satisfies Metadata;

export default function LecturesPage() {
  return (
    <main>
      <div className="mb-10">
        <Alert mdx>
          Class recordings can be found in{' '}
          <a
            className="font-medium underline"
            href={CLASS_RECORDINGS_URL}
            target="_blank"
          >
            this folder
          </a>
          , and live code written in lectures can be found{' '}
          <a
            className="font-medium underline"
            href={LIVE_CODE_URL}
            target="_blank"
          >
            here
          </a>
          .
        </Alert>
      </div>
      <LectureTree />
      <Credit className="mt-6" />
    </main>
  );
}
