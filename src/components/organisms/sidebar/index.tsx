import Filter from "../filter";
import useCharacterStore from "../../../store/use-character-store";
import { useEffect } from "react";
import SidebarSection from "../../molecules/sidebar-section";
import mapData from "../../../utils/map-data";
import useLoadingStore from "../../../store/use-loading";
import useGetAll from "../../../hooks/use-get-all";

const Sidebar = () => {
  const { data, loading } = useGetAll();
  const loadingApp = useLoadingStore((state) => state.loading);
  const loadListCharacter = useCharacterStore(
    (state) => state.loadListCharacter
  );
  const listCharacters = useCharacterStore((state) => state.listCharacters);
  const listLikedCharacters = useCharacterStore(
    (state) => state.listLikedCharacters
  );

  useEffect(() => {
    if (!data) return;
    loadListCharacter(mapData(data.characters.results, listCharacters));
  }, [data]);

  return (
    <nav className="bg-white h-screen flex flex-col pt-[42px] pr-[20px] pb-[42px] pl-[20px] md:bg-gray-50 ">
      <h1 className="text-[24px]">Rick and Morty list</h1>
      <Filter />
      {loading || loadingApp ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col  w-full h-full overflow-auto">
          <SidebarSection
            title="STARRED CHARACTERS"
            list={listLikedCharacters.filter((ch) =>
              listCharacters.some((lck) => lck.id == ch.id)
            )}
          />
          <SidebarSection
            title="CHARACTERS"
            list={listCharacters.filter(
              (ch) => !listLikedCharacters.some((lck) => lck.id == ch.id)
            )}
          />
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
