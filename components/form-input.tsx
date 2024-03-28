import { InputHTMLAttributes } from "react";

interface FormInputProps {
  name: string;
  errors?: string[];
}

export default function FormInput({
  errors = [],
  name,
  ...rest
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent pl-2 placeholder:text-neutral-400 border-none rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-400 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
