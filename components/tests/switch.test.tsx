import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { describe, expect, it } from 'vitest';
import { Switch } from '../ui/switch';

type FormValues = {
  isYearly: boolean;
};

function TestSwitch({
  defaultValue = false,
  leftLabel = 'Monthly',
  rightLabel = 'Yearly',
}: {
  defaultValue?: boolean;
  leftLabel?: string;
  rightLabel?: string;
}) {
  const { control } = useForm<FormValues>({
    defaultValues: { isYearly: defaultValue },
  });

  return (
    <Switch
      name="isYearly"
      control={control}
      leftLabel={leftLabel}
      rightLabel={rightLabel}
    />
  );
}

describe('Switch', () => {
  it('renders the labels and switch', () => {
    render(<TestSwitch />);

    expect(screen.getByText('Monthly')).toBeInTheDocument();
    expect(screen.getByText('Yearly')).toBeInTheDocument();
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('toggles when clicked', async () => {
    const user = userEvent.setup();

    render(<TestSwitch />);
    const switchElement = screen.getByRole('switch');

    expect(switchElement).toHaveAttribute('aria-checked', 'false');

    await user.click(switchElement);

    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });

  it('starts checked when the default value is true', () => {
    render(<TestSwitch defaultValue={true} />);

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('dims the left label when checked', () => {
    render(<TestSwitch defaultValue={true} />);

    expect(screen.getByText('Monthly').className).toContain('text-grey-500');
    expect(screen.getByText('Yearly').className).not.toContain('text-grey-500');
  });

  it('dims the right label when unchecked', () => {
    render(<TestSwitch defaultValue={false} />);

    expect(screen.getByText('Monthly').className).not.toContain('text-grey-500');
    expect(screen.getByText('Yearly').className).toContain('text-grey-500');
  });

  it('toggles when a label is clicked', async () => {
    const user = userEvent.setup();

    render(<TestSwitch />);
    const switchElement = screen.getByRole('switch');

    await user.click(screen.getByText('Yearly'));

    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });
});
