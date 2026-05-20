import { Switch } from '@/components/ui/switch';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { cn } from '@/utils/cn';
import { AdvancedIcon } from './icons/advanced-icon';
import { ArcadeIcon } from './icons/arcade-icon';
import { ProIcon } from './icons/pro-icon';
import { PlanContent } from './plan-content';

const Step2 = () => {
  return (
    <div className="w-full">
      <ToggleGroup
        className="w-full flex flex-col items-center justify-between gap-y-2 mb-8 lg:flex-row lg:gap-x-4.5"
        itemClassName={cn(
          'w-full h-20 rounded-lg border px-4 py-5 flex flex-row items-start gap-x-4 cursor-pointer',
          'lg:h-40 lg:flex-col lg:flex-1 lg:py-4.5',
          'data-[state=on]:border-purple-600 data-[state=on]:bg-purple-50',
          'data-[state=off]:border-purple-200 data-[state=off]:bg-white',
        )}
        items={[
          {
            content: (
              <PlanContent icon={<ArcadeIcon />} name="Arcade" price={9} />
            ),
            value: 'arcade',
          },
          {
            content: (
              <PlanContent icon={<AdvancedIcon />} name="Advanced" price={12} />
            ),
            value: 'advanced',
          },
          {
            content: <PlanContent icon={<ProIcon />} name="Pro" price={15} />,
            value: 'pro',
          },
        ]}
        type="single"
      />
      <div className="w-full h-12 bg-blue-50 flex items-center justify-center">
        <Switch leftLabel="Monthly" rightLabel="Yearly" />
      </div>
    </div>
  );
};

export { Step2 };
