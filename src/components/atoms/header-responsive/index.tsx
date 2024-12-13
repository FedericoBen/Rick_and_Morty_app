import arrowBckIcon from "../../../assets/icons/arrow_back_icon.svg";

interface HeaderResponsiveProps {
  title?: string;
  onClick: () => void;
}

const HeaderResponsive = ({ onClick, title }: HeaderResponsiveProps) => {
  return (
    <header className="flex w-full mb-20 md:hidden">
      <div onClick={onClick}>
        <img
          className="md:hidden h-[24px] w-[24px] cursor-pointer"
          src={arrowBckIcon}
          alt="arrow_back_icon"
        />
      </div>
      <h3 className="text-black font-greycliff font-medium text-[16px] md:hidden w-full text-center">
        {title}
      </h3>
    </header>
  );
};

export default HeaderResponsive;
