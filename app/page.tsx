import { Form } from "@/features/onboarding/components/form";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-blue-100 font-ubuntu dark:bg-blue-100">
      <main className="size-full flex items-center justify-center">
        <Form />
      </main>
    </div>
  );
}
