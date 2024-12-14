import CharacterInfo from "../../atoms/character-information";

interface SectionInfoProps {
  title: string;
  info: string;
}

const SectionInfo = ({ title, info }: SectionInfoProps) => {
  return (
    <div className="w-full min-h-74 pt-16 pr-24 pb-16">
      <CharacterInfo title={title} subtitle={info} />
    </div>
  );
};

export default SectionInfo;
