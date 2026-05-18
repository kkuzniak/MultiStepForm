import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';

type Props = {
  items: {
    content: React.ReactNode;
    value: string;
  }[];
  type: 'single' | 'multiple';
  className?: string;
  itemClassName?: string;
};

const ToggleGroup = ({ className, items, type, itemClassName }: Props) => {
  return (
    <ToggleGroupPrimitive.Root className={className} type={type}>
      {items.map(({ content, value }) => (
        <ToggleGroupPrimitive.Item
          className={itemClassName}
          key={value}
          value={value}
        >
          {content}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
};

export { ToggleGroup };
