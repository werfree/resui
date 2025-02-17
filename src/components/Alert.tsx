import React from 'react';
import { InfoIcon } from 'lucide-react';
type AlertPropType = {
  message?: string;
  title?: string;
  color?: 'red' | 'green' | 'yellow' | 'blue';
  children?: React.ReactNode;
  animation?: boolean;
};

const colorClasses: Record<string, string> = {
  red: 'text-red-400',
  green: 'text-green-400',
  blue: 'text-blue-400',
  yellow: 'text-yellow-400',
};

function Alert({
  message = '',
  title = '',
  color = 'blue',
  animation = true,
}: // children = <></>,
AlertPropType) {
  if (!message || !title) return <></>;
  return (
    <div className={`mt-5 fixed flex inset-0 justify-center`} role="alert">
      <div
        className={`p-4 h-max mb-4 text-xs md:text-base ${
          colorClasses[color]
        } rounded-lg bg-blue-50 dark:bg-gray-800/40 dark:${
          colorClasses[color]
        } ${animation ? 'animate-pulse' : ''}`}
      >
        <span className={`font-bold`}>
          <div className="flex items-center space-x-2">
            <InfoIcon />
            <span className="ml-4">{message}</span>
          </div>
        </span>{' '}
      </div>
    </div>
  );
}

export default Alert;
