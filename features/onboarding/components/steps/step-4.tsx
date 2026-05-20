const Step4 = () => {
  const total = 12;
  const addons = [
    {
      name: 'Online service',
      price: 1,
    },
    {
      name: 'Larger storage',
      price: 2,
    },
  ];

  const planName = 'Arcade (Monthly)';
  const planPrice = 9;

  return (
    <>
      <div className="w-full bg-blue-50 py-5.5 px-6 rounded-lg text-preset4 mb-8">
        <header className="flex items-center justify-between mb-4 pb-4 border-b border-blue-200">
          <div>
            <h3 className="text-preset3-medium mb-2">{planName}</h3>
            <p className="text-grey-500">Change</p>
          </div>
          <p className="text-preset3-bold">{`$${planPrice}/mo`}</p>
        </header>
        <div className="flex flex-col gap-y-4">
          {addons.map(({ name, price }) => (
            <div key={name} className="flex items-center justify-between">
              <p className="text-grey-500">{name}</p>
              <p>{`+$${price}/mo`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-6">
        <p className="text-grey-500 text-preset4"> Total (per month)</p>
        <p className="text-preset6 text-purple-600">{`+$${total}/mo`}</p>
      </div>
    </>
  );
};

export { Step4 };
