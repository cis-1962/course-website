import Alert from '@/components/alert';

export default function Credit({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <Alert mdx type="success">
        Our curriculum wouldn&apos;t be possible without the work of{' '}
        <a
          className="font-medium underline"
          href="https://peterbaile.github.io/"
          target="_blank"
        >
          Peter Chen
        </a>{' '}
        and past CIS 1962 instructors!
      </Alert>
    </div>
  );
}
