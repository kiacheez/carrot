"use client";
import { useFormStatus } from "react-dom";

interface VerificationButtonProps {
  
  text: string;
  
}

export default function VerificationBtn({ text }: VerificationButtonProps) {
  const {pending} = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 w-1/3 ml-2 p-2 text-sm/[13px] disabled:bg-neutral-400 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
