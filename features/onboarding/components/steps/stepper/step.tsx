import { cn } from '@/utils/cn';

type Props = {
  number: number;
  title: string;
  selected?: boolean;
};

const Step = ({ number, title, selected = false }: Props) => {
  return (
    <div className="flex flex-row items-center gap-x-4 cursor-pointer">
      <div
        className={cn(
          'size-8.25 rounded-full bg-transparent border border-white flex items-center justify-center',
          selected && 'bg-blue-200 border-blue-200',
        )}
      >
        <p
          className={cn(
            'text-preset4-bold uppercase',
            !selected && 'text-white',
          )}
        >
          {number}
        </p>
      </div>
      <div className="hidden md:flex md:flex-col">
        <header className="text-preset5 text-blue-300 uppercase">
          {`Step ${number}`}
        </header>
        <p className="text-preset4-bold text-white uppercase">{title}</p>
      </div>
    </div>
  );
};

export { Step };
