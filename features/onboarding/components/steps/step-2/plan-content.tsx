type Props = {
  icon: React.ReactNode;
  name: string;
  price: number;
};

const PlanContent = ({ icon, name, price }: Props) => {
  return (
    <>
      {icon}
      <div className="flex flex-col items-start mt-auto">
        <h3 className="text-preset3-medium">{name}</h3>
        <p className="text-preset4 text-grey-500">{`$${price}/mo`}</p>
      </div>
    </>
  );
};

export { PlanContent };
