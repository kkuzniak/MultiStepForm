import { Input } from '@/components/ui/input';

const Step2 = () => {
  return (
    <div className="w-full flex flex-col gap-y-6">
      <Input
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
        label="Name"
      />
      <Input
        id="email"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        label="Email Address"
      />
      <Input
        id="phone"
        type="tel"
        placeholder="e.g. +1 234 567 890"
        label="Phone Number"
      />
    </div>
  );
};

export { Step2 };
