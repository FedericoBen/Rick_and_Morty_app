import { forwardRef } from "react";
import filterIcon from "../../../assets/icons/filter_icon.svg";

interface ButtonSearchProps {
  onClick: () => void;
  className?: string;
}

const ButtonSearch = forwardRef<HTMLButtonElement, ButtonSearchProps>(
  ({ onClick, className }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`flex items-center justify-center hover:bg-primary100 h-38 w-38 rounded-[8px] ${className}`}
      >
        <img src={filterIcon} alt="filterIcon" />
      </button>
    );
  }
);

export default ButtonSearch;
