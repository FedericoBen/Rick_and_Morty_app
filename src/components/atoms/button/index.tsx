import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="bg-primary600 text-white min-h-38 w-full rounded-sm hover:bg-primary700 disabled:bg-custom_gray_dark disabled:cursor-not-allowed disabled:text-custom_gray"
    >
      {children}
    </button>
  );
};

export default Button;
