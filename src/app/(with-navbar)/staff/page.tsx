import { Metadata } from 'next';
import Image from 'next/image';

import EmailCopyButton from './email-copy-button';

import { makeTitle } from '@/constants/metadata';
import { STAFF, STAFF_IMAGE_FOLDER } from '@/constants/staff';

export const metadata = {
  title: makeTitle('Staff'),
} satisfies Metadata;

export default function StaffPage() {
  return (
    <main className="grid grid-flow-row grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
      {STAFF.map(({ name, role, email, oh, description, image }) => (
        <figure key={email}>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              alt={name}
              src={`${STAFF_IMAGE_FOLDER}/${image}`}
              fill
              className="object-cover"
            />
          </div>
          <figcaption>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.01em] dark:font-semibold">
              {name}
            </h2>
            <div className="font-medium opacity-50">{role}</div>
            <h4 className="mt-2">
              OH: <b>{`${oh.time}, ${oh.location}`}</b>
            </h4>
            <p className="mt-2 tracking-[0.01em]">{description}</p>
            <div className="mt-1 flex items-center gap-1">
              <a
                href={`mailto:${email}`}
                className="font-medium underline hover:opacity-80 dark:font-normal"
              >
                {email}
              </a>
              <EmailCopyButton email={email} />
            </div>
          </figcaption>
        </figure>
      ))}
    </main>
  );
}
