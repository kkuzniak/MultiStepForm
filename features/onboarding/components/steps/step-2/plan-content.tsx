type Props = {
  icon: React.ReactNode;
  name: string;
  price: number;
};

const PlanContent = ({ icon, name, price }: Props) => {
  return (
    <>
      {icon}
      <h3 className="text-preset3-medium text-blue-950 mt-auto">{name}</h3>
      <p className="text-preset4 text-grey-500">{`$${price}/mo`}</p>
    </>
  );
};

export { PlanContent };
