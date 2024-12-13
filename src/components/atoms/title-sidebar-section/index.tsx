interface TitleSidebarSectionProps {
  title: string;
  onClick: () => void;
}

const TitleSidebarSection = ({ title, onClick }: TitleSidebarSectionProps) => {
  return (
    <header
      onClick={onClick}
      className="min-h-[56px] flex items-center cursor-pointer hover:bg-gray-200"
    >
      <h1 className="text-[12px] w-full pr-[16px] pl-[16px] text-gray">
        {title}
      </h1>
    </header>
  );
};

export default TitleSidebarSection;
