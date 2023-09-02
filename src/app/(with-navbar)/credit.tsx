import Alert from '@/components/alert';

export default function Credit() {
  return (
    <div className="pb-10">
      <Alert>
        Credit for much of the material goes to{' '}
        <a
          className="underline"
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
