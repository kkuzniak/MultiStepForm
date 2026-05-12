import { cn } from "@/utils/cn";

type Props = {
  type: "primary" | "secondary";
  onClick: () => void;
  className?: string;
}

const Button = ({ onClick, className }: Props) => {
  return (
    <button className={cn("bg-blue-500 text-white px-4 py-2 rounded-md", className)} onClick={onClick}>
      Click me
    </button>
  )
}

export { Button };