"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

const SubmitButton = ({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus()
  return (
    <Button aria-disabled={pending} className={`w-full mt-2 ${className}`} type="submit" {...props}>
      {pending ? 'Submitting...' : children}
    </Button>
  );
}

export default SubmitButton;