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
        className="w-full flex flex-row items-center justify-between gap-x-4.5 mb-8"
        itemClassName={cn(
          'flex-1 h-40 rounded-lg border px-4 py-4.5 flex flex-col items-start cursor-pointer transition-colors duration-200',
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
