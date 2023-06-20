export function Code({ code }: { code: string }) {
  return (
    <div className="rounded p-3 font-mono ring-1 ring-gray-300 dark:ring-gray-600">
      {code}
    </div>
  );
}
