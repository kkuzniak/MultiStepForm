import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';
import { Input } from '../ui/input';

type FormValues = {
  email: string;
};

function TestInput({
  defaultValue = '',
  errors,
  onChange,
  className,
}: {
  defaultValue?: string;
  errors?: { email?: { message: string; type: string } };
  onChange?: (value: string) => void;
  className?: string;
}) {
  const { control } = useForm<FormValues>({
    defaultValues: { email: defaultValue },
  });

  return (
    <Input
      name="email"
      control={control}
      type="email"
      placeholder="Enter email"
      label="Email"
      errors={errors}
      onChange={onChange}
      className={className}
    />
  );
}

describe('Input', () => {
  it('renders the label and input', () => {
    render(<TestInput />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toHaveAttribute(
      'type',
      'email',
    );
  });

  it('updates the value when the user types', async () => {
    const user = userEvent.setup();

    render(<TestInput />);
    const input = screen.getByLabelText('Email');

    await user.type(input, 'test@example.com');

    expect(input).toHaveValue('test@example.com');
  });

  it('calls onChange when the value changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<TestInput onChange={onChange} />);
    await user.type(screen.getByLabelText('Email'), 'a');

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenLastCalledWith('a');
  });

  it('shows the error message when errors are provided', () => {
    render(
      <TestInput
        errors={{ email: { message: 'Invalid email', type: 'pattern' } }}
      />,
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
  });

  it('applies error styles when errors are provided', () => {
    render(
      <TestInput
        errors={{ email: { message: 'Invalid email', type: 'pattern' } }}
      />,
    );

    const input = screen.getByLabelText('Email');
    expect(input.className).toContain('border-red-500');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not apply error styles when there are no errors', () => {
    render(<TestInput />);

    const input = screen.getByLabelText('Email');
    expect(input.className).not.toContain('border-red-500');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('merges a custom className', () => {
    render(<TestInput className="custom-class" />);

    expect(screen.getByLabelText('Email')).toHaveClass('custom-class');
  });

  it('marks the input as required', () => {
    render(<TestInput />);

    expect(screen.getByLabelText('Email')).toBeRequired();
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-required',
      'true',
    );
  });
});
