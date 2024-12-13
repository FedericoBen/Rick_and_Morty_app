import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="bg-[#8054C7] text-white min-h-[38px] w-full rounded-[8px] hover:bg-[#5A3696] disabled:bg-[#F3F4F6] disabled:cursor-not-allowed disabled:text-custom_gray"
    >
      {children}
    </button>
  );
};

export default Button;
