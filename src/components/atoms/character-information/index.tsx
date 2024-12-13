interface CharacterInfoProps {
  title: string;
  subtitle: string;
}

const CharacterInfo = ({ title, subtitle }: CharacterInfoProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-[16px] font-greycliff font-medium text-black">{title}</h3>
      <p className="text-[16px] text-custom_gray">{subtitle}</p>
    </div>
  );
};

export default CharacterInfo;
