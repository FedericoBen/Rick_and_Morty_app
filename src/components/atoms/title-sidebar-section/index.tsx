interface TitleSidebarSectionProps {
  title: string;
  onClick: () => void;
}

const TitleSidebarSection = ({ title, onClick }: TitleSidebarSectionProps) => {
  return (
    <header
      onClick={onClick}
      className="min-h-56 flex items-center cursor-pointer hover:bg-gray-200"
    >
      <h1 className="text-12 w-full pr-16 pl-16 text-gray">
        {title}
      </h1>
    </header>
  );
};

export default TitleSidebarSection;
