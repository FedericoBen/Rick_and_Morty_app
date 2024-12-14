import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  selected: boolean;
  onClick?: () => void;
}

const OptionFilter = ({ children, selected, onClick }: ButtonProps) => {
  return (
    <span
      onClick={onClick}
      className={`cursor-pointer min-h-44 min-w-88-5 w-full rounded-[8px] flex items-center justify-center hover:bg-primary100 ${
        selected ? "bg-primary100" : "bg-withe"
      } ${selected ? "border-0" : "border-1 border-gray-300"}`}
    >
      {children}
    </span>
  );
};

export default OptionFilter;
