import CharacterInfo from "../../atoms/character-information";

interface SectionInfoProps {
  title: string;
  info: string;
}

const SectionInfo = ({ title, info }: SectionInfoProps) => {
  return (
    <div className="w-full min-h-[74px pt-[16px] pr-[24px] pb-[16px]">
      <CharacterInfo title={title} subtitle={info} />
    </div>
  );
};

export default SectionInfo;
