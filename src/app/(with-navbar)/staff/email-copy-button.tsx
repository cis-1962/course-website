'use client';

import { useEffect, useState } from 'react';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2';

export default function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(email).catch(() => {});
          setCopied(true);
        }}
        className="flex items-center p-1 hover:opacity-80"
      >
        <HiOutlineDocumentDuplicate />
      </button>
      <div
        className={`absolute left-1/2 mt-1 w-max -translate-x-1/2 select-none text-sm transition-opacity ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Copied to clipboard!
      </div>
    </div>
  );
}
