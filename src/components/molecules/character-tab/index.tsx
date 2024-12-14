import { useNavigate } from "react-router-dom";
import useCharacterStore from "../../../store/use-character-store";
import CharacterInfo from "../../atoms/character-information";
import Divider from "../../atoms/divider";
import LikeIcon from "../../atoms/like-icon";
import ROUTES from "../../../constants/routes";
import { DataCharacter } from "../../../interfaces/all.character.data.interface";

interface CharacterTabProps {
  character: DataCharacter;
}

const CharacterTab = ({ character }: CharacterTabProps) => {
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter
  );
  const viewCharacter = useCharacterStore((state) => state.viewCharacter);
  const updateListLikedCharacter = useCharacterStore(
    (state) => state.updateListLikedCharacter
  );
  const navigate = useNavigate();

  return (
    <div
      className={`relative hover:bg-primary100 cursor-pointer rounded-[8px] ${
        character.id == selectedCharacter?.id ? "bg-primary100" : ""
      }`}
    >
      <div
        className="absolute h-full w-full z-10"
        onClick={() => {
          viewCharacter(character);
          navigate(ROUTES.VIEW_CHARACTER);
        }}
      />
      <Divider />
      <section className="flex gap-[20px] items-center pt-[16px] pr-[20px] pb-[16px] pl-[20px]">
        <div className="h-[32px] w-[32px] flex items-center justify-center  rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={character.image}
            alt=""
          />
        </div>
        <span className="flex items-center justify-between w-full">
          <CharacterInfo title={character.name} subtitle={character.species} />
          <LikeIcon
            onClick={() => {
              updateListLikedCharacter(character);
            }}
            like={!!character.like}
          />
        </span>
      </section>
    </div>
  );
};

export default CharacterTab;
