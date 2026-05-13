import { Steps } from './steps/steps';

const Form = () => {
  return (
    <div className="max-w-235 w-full h-150 bg-white rounded-2xl overflow-hidden flex items-center justify-between text-blue-950 shadow-md">
      <Steps />
      <div className="h-full flex-1 pt-12 pl-21">
        <h1 className="text-preset1 mb-2">Personal info</h1>
        <p className="text-preset3 text-grey-500 mb-10">
          Please provide your name, email address, and phone number.
        </p>
      </div>
    </div>
  );
};

export { Form };
