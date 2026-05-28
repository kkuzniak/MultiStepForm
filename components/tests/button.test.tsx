import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../ui/button';

describe('Button', () => {
  it('renders the label', () => {
    render(<Button label="Continue" onClick={vi.fn()} />);

    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button label="Continue" onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('uses type="button" to prevent form submission', () => {
    render(<Button label="Continue" onClick={vi.fn()} />);

    expect(screen.getByRole('button', { name: 'Continue' })).toHaveAttribute(
      'type',
      'button',
    );
  });

  it('applies primary styles by default', () => {
    render(<Button label="Continue" onClick={vi.fn()} />);

    const button = screen.getByRole('button', { name: 'Continue' });
    expect(button.className).toContain('bg-blue-950');
    expect(button.className).toContain('text-white');
  });

  it('applies secondary styles when type is secondary', () => {
    render(<Button label="Back" onClick={vi.fn()} type="secondary" />);

    const button = screen.getByRole('button', { name: 'Back' });
    expect(button.className).toContain('text-grey-500');
    expect(button.className).not.toContain('bg-blue-950');
  });

  it('merges a custom className', () => {
    render(
      <Button className="custom-class" label="Continue" onClick={vi.fn()} />,
    );

    expect(screen.getByRole('button', { name: 'Continue' })).toHaveClass(
      'custom-class',
    );
  });
});
