import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";
import useCharacterStore from "../../../store/use-character-store";
import HeaderResponsive from "../../atoms/header-responsive";
import CharacterData from "../../molecules/character-data";
import SelectedCharacterHeader from "../../molecules/selected-character-header";
import useLoadingStore from "../../../store/use-loading";

const SelectedCharacter = () => {
  const loadingApp = useLoadingStore((state) => state.loading);
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter
  );
  const updateListLikedCharacter = useCharacterStore(
    (state) => state.updateListLikedCharacter
  );
  const navigate = useNavigate();
  if (!selectedCharacter || loadingApp) return null;
  return (
    <section className="flex flex-col md:w-full h-full md:pt-[40px] pt-20 md:pr-[100px] pr-[50px] pb-[40px] md:pl-[100px] pl-[50px] overflow-auto">
      <HeaderResponsive onClick={() => navigate(ROUTES.HOME)} />
      <SelectedCharacterHeader
        img={selectedCharacter.image}
        name={selectedCharacter.name}
        like={!!selectedCharacter.like}
        clickLike={() => updateListLikedCharacter(selectedCharacter)}
      />
      <CharacterData
        id={selectedCharacter.id}
        specie={selectedCharacter.species}
        status={selectedCharacter.status}
        occupation={selectedCharacter.occupation ?? ""}
        comments={selectedCharacter.comments}
      />
    </section>
  );
};

export default SelectedCharacter;
