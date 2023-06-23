import { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineInformationCircle,
} from 'react-icons/hi2';

type AlertType = 'info' | 'success' | 'danger' | 'warning';

const alertStyles: { [key in AlertType]: string } = {
  info: 'bg-blue-500 text-blue-600 dark:text-blue-300 ring-blue-500 bg-opacity-20',
  success:
    'bg-green-500 text-green-600 dark:text-green-300 ring-green-500 bg-opacity-20',
  danger:
    'bg-red-500 text-red-600 dark:text-red-300 ring-red-500 bg-opacity-20',
  warning:
    'bg-yellow-500 text-yellow-600 dark:text-yellow-300 ring-yellow-500 bg-opacity-20',
};

const alertIcons: { [key in AlertType]: IconType } = {
  info: HiOutlineInformationCircle,
  success: HiOutlineCheckCircle,
  danger: HiOutlineExclamationTriangle,
  warning: HiOutlineExclamationTriangle,
};

export function Alert({
  children,
  type = 'info',
  hideIcon,
  mdx,
}: {
  children: ReactNode;
  type?: AlertType;
  hideIcon?: boolean;
  mdx?: boolean;
}) {
  const Icon = alertIcons[type];
  return (
    <div
      className={`grid-flow-row grid-cols-[auto_1fr] items-center rounded-md ring-1 sm:grid ${alertStyles[type]}`}
    >
      {hideIcon || <Icon className="ml-4 hidden text-lg sm:block" />}
      <div className={`p-4 ${mdx ? 'space-children-2' : ''}`}>{children}</div>
    </div>
  );
}
