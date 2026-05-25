import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  items: {
    content: React.ReactNode;
    value: string;
  }[];
  type: 'single' | 'multiple';
  className?: string;
  itemClassName?: string;
};

const ToggleGroup = <T extends FieldValues>({
  name,
  control,
  className,
  items,
  type,
  itemClassName,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const handleChange = (value: string) => {
          if (!value.length) {
            return;
          }

          field.onChange(value);
        };

        return (
          <ToggleGroupPrimitive.Root
            className={className}
            type={type}
            value={field.value}
            onValueChange={handleChange}
            rovingFocus={false}
          >
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
      }}
    />
  );
};

export { ToggleGroup };
