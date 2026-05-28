import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Form } from '@/features/onboarding/components/form/form';
import { SuccessContent } from '@/features/onboarding/components/success-content';
import { STEPS } from '@/features/onboarding/constants';
import { clearFormData } from '@/features/onboarding/lib/form-store/client';

let routePush: (path: string) => void = () => undefined;

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: (path: string) => routePush(path),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
}));

function OnboardingFlowHarness() {
  const [path, setPath] = useState('/apply/1');

  useEffect(() => {
    routePush = setPath;
    return () => {
      routePush = () => undefined;
    };
  }, []);

  if (path === '/apply/success') {
    return <SuccessContent />;
  }

  const step = Number(path.replace('/apply/', ''));

  if (Number.isNaN(step) || step < 1 || step > STEPS.length) {
    return null;
  }

  return <Form step={step} />;
}

async function fillPersonalInfo(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Name'), 'Jane Doe');
  await user.type(screen.getByLabelText('Email Address'), 'jane@example.com');
  await user.type(screen.getByLabelText('Phone Number'), '+1 234 567 890');
}

async function goToNextStep(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: 'Next Step' }));
}

async function advanceToStep2(user: ReturnType<typeof userEvent.setup>) {
  await fillPersonalInfo(user);
  await goToNextStep(user);
}

async function configurePlanStep(
  user: ReturnType<typeof userEvent.setup>,
  { plan = 'Pro', yearly = true }: { plan?: string; yearly?: boolean } = {},
) {
  await user.click(screen.getByRole('radio', { name: new RegExp(plan, 'i') }));

  if (yearly) {
    await user.click(screen.getByRole('switch'));
  }
}

async function advanceToSummary(
  user: ReturnType<typeof userEvent.setup>,
  planOptions?: Parameters<typeof configurePlanStep>[1],
) {
  await advanceToStep2(user);
  await configurePlanStep(user, planOptions);
  await goToNextStep(user);
  await user.click(
    screen.getByRole('checkbox', { name: /online service/i }),
  );
  await user.click(
    screen.getByRole('checkbox', { name: /larger storage/i }),
  );
  await goToNextStep(user);
}

describe('Onboarding flow integration', () => {
  beforeEach(() => {
    clearFormData();
  });

  it('advances through each step of the flow to the success page', async () => {
    const user = userEvent.setup();

    render(<OnboardingFlowHarness />);

    expect(
      screen.getByRole('heading', { name: STEPS[0].title }),
    ).toBeInTheDocument();
    expect(screen.getByText(STEPS[0].description)).toBeInTheDocument();

    await fillPersonalInfo(user);
    await goToNextStep(user);

    expect(
      screen.getByRole('heading', { name: STEPS[1].title }),
    ).toBeInTheDocument();
    expect(screen.getByText('Monthly')).toBeInTheDocument();
    expect(screen.getByText('Yearly')).toBeInTheDocument();

    await goToNextStep(user);

    expect(
      screen.getByRole('heading', { name: STEPS[2].title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /online service/i }),
    ).toBeInTheDocument();

    await goToNextStep(user);

    expect(
      screen.getByRole('heading', { name: STEPS[3].title }),
    ).toBeInTheDocument();
    expect(screen.getByText('Arcade (Monthly)')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Confirm' }));

    expect(
      screen.getByRole('heading', { name: 'Thank you!' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Thanks for confirming your subscription/),
    ).toBeInTheDocument();
  });

  it('does not leave step 1 when personal info is invalid', async () => {
    const user = userEvent.setup();

    render(<OnboardingFlowHarness />);

    await user.click(screen.getByRole('button', { name: 'Next Step' }));

    expect(
      screen.getByRole('heading', { name: STEPS[0].title }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('alert')).toHaveLength(3);
    expect(
      screen.queryByRole('heading', { name: STEPS[1].title }),
    ).not.toBeInTheDocument();
  });

  it('does not leave step 1 when the email is invalid', async () => {
    const user = userEvent.setup();

    render(<OnboardingFlowHarness />);

    await user.type(screen.getByLabelText('Name'), 'Jane Doe');
    await user.type(screen.getByLabelText('Email Address'), 'not-an-email');
    await user.type(screen.getByLabelText('Phone Number'), '+1 234 567 890');
    await user.click(screen.getByRole('button', { name: 'Next Step' }));

    expect(
      screen.getByRole('heading', { name: STEPS[0].title }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'false');
    expect(screen.getByLabelText('Phone Number')).toHaveAttribute(
      'aria-invalid',
      'false',
    );
    expect(
      screen.queryByRole('heading', { name: STEPS[1].title }),
    ).not.toBeInTheDocument();
  });

  it('does not leave step 1 when the phone number is missing', async () => {
    const user = userEvent.setup();

    render(<OnboardingFlowHarness />);

    await user.type(screen.getByLabelText('Name'), 'Jane Doe');
    await user.type(
      screen.getByLabelText('Email Address'),
      'jane@example.com',
    );
    await user.click(screen.getByRole('button', { name: 'Next Step' }));

    expect(
      screen.getByRole('heading', { name: STEPS[0].title }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'false');
    expect(screen.getByLabelText('Email Address')).toHaveAttribute(
      'aria-invalid',
      'false',
    );
    expect(
      screen.queryByRole('heading', { name: STEPS[1].title }),
    ).not.toBeInTheDocument();
  });

  it('reflects plan, billing cycle, and add-on choices on the summary', async () => {
    const user = userEvent.setup();

    render(<OnboardingFlowHarness />);

    await advanceToSummary(user);

    expect(
      screen.getByRole('heading', { name: STEPS[3].title }),
    ).toBeInTheDocument();
    expect(screen.getByText('Pro (Yearly)')).toBeInTheDocument();
    expect(screen.getByText('$150/yr')).toBeInTheDocument();
    expect(screen.getByText('Online service')).toBeInTheDocument();
    expect(screen.getByText('Larger storage')).toBeInTheDocument();
    expect(screen.getByText('Total (per year)')).toBeInTheDocument();
    expect(screen.getByText('+$180/yr')).toBeInTheDocument();
  });

  it('keeps personal info when navigating back from step 2', async () => {
    const user = userEvent.setup();

    render(<OnboardingFlowHarness />);

    await advanceToStep2(user);
    await user.click(screen.getByRole('button', { name: 'Go Back' }));

    expect(screen.getByLabelText('Name')).toHaveValue('Jane Doe');
    expect(screen.getByLabelText('Email Address')).toHaveValue(
      'jane@example.com',
    );
    expect(screen.getByLabelText('Phone Number')).toHaveValue(
      '+1 234 567 890',
    );
  });

  it('navigates to step 2 when Change is clicked on the summary', async () => {
    const user = userEvent.setup();

    render(<OnboardingFlowHarness />);

    await advanceToSummary(user);
    await user.click(screen.getByRole('button', { name: 'Change' }));

    expect(
      screen.getByRole('heading', { name: STEPS[1].title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /Pro/i })).toHaveAttribute(
      'data-state',
      'on',
    );
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('navigates back through steps with Go Back', async () => {
    const user = userEvent.setup();

    render(<OnboardingFlowHarness />);

    await fillPersonalInfo(user);
    await goToNextStep(user);
    await goToNextStep(user);

    expect(
      screen.getByRole('heading', { name: STEPS[2].title }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Go Back' }));

    expect(
      screen.getByRole('heading', { name: STEPS[1].title }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Go Back' }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Go Back' }));

    expect(
      screen.getByRole('heading', { name: STEPS[0].title }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Go Back' }),
    ).not.toBeInTheDocument();
  });
});
