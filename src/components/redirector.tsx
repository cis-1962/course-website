'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Redirector({
  minDate,
  redirectTo,
}: {
  minDate: Date;
  redirectTo: string;
}) {
  const router = useRouter();

  useEffect(() => {
    if (
      process.env.NODE_ENV !== 'development' &&
      Date.now() < minDate.getTime()
    ) {
      // eslint-disable-next-line no-void
      void router.replace(redirectTo);
    }
  }, [router, minDate, redirectTo]);

  return null;
}
