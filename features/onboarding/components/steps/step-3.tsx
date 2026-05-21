import { OptionCard } from '@/components/ui/option-card';

const ADDONS = [
  {
    id: 'online-service',
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: 'larger-storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: 'custom-profile',
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
  },
];

const Step3 = () => {
  return (
    <div className="w-full flex flex-col gap-y-2 md:gap-y-4">
      {ADDONS.map(({ id, name, description, price }) => (
        <OptionCard key={id}>
          <label
            htmlFor="online-service"
            className="w-full flex flex-row items-center justify-between text-preset5 md:text-preset4"
          >
            <header className="flex flex-col items-start md:gap-y-2">
              <h3 className="text-preset4-medium md:text-preset3-medium">
                {name}
              </h3>
              <p className="text-grey-500">{description}</p>
            </header>
            <p className="text-purple-600">{`+$${price}/mo`}</p>
          </label>
        </OptionCard>
      ))}
    </div>
  );
};

export { Step3 };
