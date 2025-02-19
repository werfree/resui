'use client';
type LightButton = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFull?: boolean;
};

export const LightButton = ({
  children,
  onClick,
  isFull = false,
}: LightButton) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800  w-full ${isFull ? '' : 'sm:w-max'}`}
    >
      {children}
    </button>
  );
};
