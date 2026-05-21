import { AdvancedIcon } from './icons/advanced-icon';
import { ArcadeIcon } from './icons/arcade-icon';
import { ProIcon } from './icons/pro-icon';

type Props = {
  name: string;
  type: 'arcade' | 'advanced' | 'pro';
  price: number;
};

const PlanContent = ({ name, type, price }: Props) => {
  const iconByType: Record<string, React.ReactNode> = {
    arcade: <ArcadeIcon className="size-9 md:size-10" />,
    advanced: <AdvancedIcon className="size-9 md:size-10" />,
    pro: <ProIcon className="size-9 md:size-10" />,
  };

  return (
    <>
      {iconByType[type]}
      <div className="flex flex-col items-start md:mt-auto">
        <h3 className="text-preset4-medium md:text-preset3-medium">{name}</h3>
        <p className="text-preset5 text-grey-500 md:text-preset4">{`$${price}/mo`}</p>
      </div>
    </>
  );
};

export { PlanContent };
