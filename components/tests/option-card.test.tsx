import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { describe, expect, it } from 'vitest';
import { OptionCard } from '../ui/option-card';

type FormValues = {
  addons: string[];
};

function TestOptionCard({
  defaultValue = [],
  name = 'online-service',
  className,
  children = 'Online service',
}: {
  defaultValue?: string[];
  name?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { control } = useForm<FormValues>({
    defaultValues: { addons: defaultValue },
  });

  return (
    <OptionCard
      fieldPath="addons"
      name={name}
      control={control}
      className={className}
    >
      {children}
    </OptionCard>
  );
}

describe('OptionCard', () => {
  it('renders its children', () => {
    render(<TestOptionCard>Custom addon label</TestOptionCard>);

    expect(screen.getByText('Custom addon label')).toBeInTheDocument();
  });

  it('starts unchecked when the value is not in the form array', () => {
    render(<TestOptionCard />);

    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-checked',
      'false',
    );
  });

  it('starts checked when the value is in the form array', () => {
    render(<TestOptionCard defaultValue={['online-service']} />);

    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-checked',
      'true',
    );
  });

  it('checks when clicked', async () => {
    const user = userEvent.setup();

    render(<TestOptionCard />);
    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('unchecks when clicked again', async () => {
    const user = userEvent.setup();

    render(<TestOptionCard defaultValue={['online-service']} />);
    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('toggles when Enter is pressed', async () => {
    const user = userEvent.setup();

    render(<TestOptionCard />);
    const checkbox = screen.getByRole('checkbox');

    checkbox.focus();
    await user.keyboard('{Enter}');

    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('merges a custom className', () => {
    render(<TestOptionCard className="custom-class" />);

    expect(screen.getByRole('checkbox')).toHaveClass('custom-class');
  });
});
