import { useState } from "react";
import TitleSidebarSection from "../../atoms/title-sidebar-section";
import CharacterTab from "../character-tab";
import { DataCharacter } from "../../../interfaces/all.character.data.interface";

interface SidebarSectionProps {
  title: string;
  list: DataCharacter[];
}

const SidebarSection = ({ title, list }: SidebarSectionProps) => {
  const [open, setOpen] = useState(true);
  if (list.length == 0) return null;
  return (
    <>
      <TitleSidebarSection
        onClick={() => setOpen(!open)}
        title={`${title} (${list.length})`}
      />
      {open && (
        <div className="w-full flex flex-col ">
          {list.map((character) => (
            <CharacterTab key={character.id} character={character} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarSection;
