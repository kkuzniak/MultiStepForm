import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';

type Props = {
  currentStep: number;
  handleGoBack: () => void;
  handleNextStep: () => void;
  isLastStep: boolean;
};

const FormNavigationButtons = ({
  currentStep,
  handleGoBack,
  handleNextStep,
  isLastStep,
}: Props) => {
  const isFirstStep = currentStep === 1;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 bg-white h-18 w-full justify-between mt-auto flex items-center p-4 shadow-md',
        'md:relative md:p-0 md:shadow-none',
        isFirstStep && 'justify-end',
      )}
    >
      {!isFirstStep && (
        <Button label="Go Back" onClick={handleGoBack} type="secondary" />
      )}
      <Button
        className={cn(
          isLastStep &&
            'bg-purple-600 hover:bg-purple-400 active:bg-purple-400',
        )}
        label={isLastStep ? 'Confirm' : 'Next Step'}
        onClick={handleNextStep}
      />
    </div>
  );
};

export { FormNavigationButtons };
