import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ ...props }: InputProps) {
  return (
    <label className={`flex relative w-full h-[34px]`}>
      <input
        className="w-full h-full outline-none border-none text-custom_gray text-[14px] bg-transparent p-2"
        {...props}
      />
    </label>
  );
}
