import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { describe, expect, it } from 'vitest';
import { ToggleGroup } from '../ui/toggle-group';

type FormValues = {
  plan: string;
};

const items = [
  { content: 'Arcade', value: 'arcade' },
  { content: 'Advanced', value: 'advanced' },
  { content: 'Pro', value: 'pro' },
];

function TestToggleGroup({
  defaultValue = '',
  className,
  itemClassName,
}: {
  defaultValue?: string;
  className?: string;
  itemClassName?: string;
}) {
  const { control } = useForm<FormValues>({
    defaultValues: { plan: defaultValue },
  });

  return (
    <ToggleGroup
      name="plan"
      control={control}
      items={items}
      className={className}
      itemClassName={itemClassName}
    />
  );
}

describe('ToggleGroup', () => {
  it('renders all toggle items', () => {
    render(<TestToggleGroup />);

    expect(screen.getByRole('radio', { name: 'Arcade' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Advanced' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Pro' })).toBeInTheDocument();
  });

  it('selects an item when clicked', async () => {
    const user = userEvent.setup();

    render(<TestToggleGroup />);
    const arcade = screen.getByRole('radio', { name: 'Arcade' });

    await user.click(arcade);

    expect(arcade).toHaveAttribute('data-state', 'on');
    expect(arcade).toHaveAttribute('aria-checked', 'true');
  });

  it('starts with the default value selected', () => {
    render(<TestToggleGroup defaultValue="advanced" />);

    expect(screen.getByRole('radio', { name: 'Advanced' })).toHaveAttribute(
      'data-state',
      'on',
    );
    expect(screen.getByRole('radio', { name: 'Arcade' })).toHaveAttribute(
      'data-state',
      'off',
    );
  });

  it('switches selection when another item is clicked', async () => {
    const user = userEvent.setup();

    render(<TestToggleGroup defaultValue="arcade" />);

    await user.click(screen.getByRole('radio', { name: 'Pro' }));

    expect(screen.getByRole('radio', { name: 'Pro' })).toHaveAttribute(
      'data-state',
      'on',
    );
    expect(screen.getByRole('radio', { name: 'Arcade' })).toHaveAttribute(
      'data-state',
      'off',
    );
  });

  it('keeps the current selection when the selected item is clicked again', async () => {
    const user = userEvent.setup();

    render(<TestToggleGroup defaultValue="arcade" />);
    const arcade = screen.getByRole('radio', { name: 'Arcade' });

    await user.click(arcade);

    expect(arcade).toHaveAttribute('data-state', 'on');
  });

  it('merges custom class names', () => {
    render(
      <TestToggleGroup
        className="group-class"
        itemClassName="item-class"
      />,
    );

    expect(screen.getByRole('group')).toHaveClass('group-class');
    expect(screen.getByRole('radio', { name: 'Arcade' })).toHaveClass(
      'item-class',
    );
  });
});
