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
      className={`cursor-pointer min-h-[44px] min-w-[88.5px] w-full rounded-[8px] flex items-center justify-center hover:bg-primary100 ${
        selected ? "bg-primary100" : "bg-withe"
      } ${selected ? "border-0" : "border-[1px] border-gray-300"}`}
    >
      {children}
    </span>
  );
};

export default OptionFilter;
