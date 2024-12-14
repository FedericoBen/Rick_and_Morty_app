import FilterApp from "../filter-app";
import useCharacterStore from "../../../store/use-character-store";
import { useEffect, useMemo } from "react";
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
  const listFilterCharacters = useCharacterStore(
    (state) => state.listFilterCharacters
  );
  const listLikedCharacters = useCharacterStore(
    (state) => state.listLikedCharacters
  );

  const listToShow = useMemo(
    () =>
      listFilterCharacters.length > 0 ? listFilterCharacters : listCharacters,
    [listCharacters, listFilterCharacters]
  );

  useEffect(() => {
    if (!data) return;
    loadListCharacter(mapData(data.characters.results, listCharacters));
  }, [data]);

  return (
    <nav className="bg-white h-screen flex flex-col pt-42 pr-20 pb-42 pl-20 md:bg-gray-50 ">
      <h1 className="text-24 min-h-40 mb-17">
        Rick and Morty list
      </h1>
      <FilterApp />
      {loading || loadingApp ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col  w-full h-full overflow-auto">
          <SidebarSection
            title="STARRED CHARACTERS"
            list={listLikedCharacters.filter((ch) =>
              listToShow.some((lck) => lck.id == ch.id)
            )}
          />
          <SidebarSection
            title="CHARACTERS"
            list={listToShow.filter(
              (ch) => !listLikedCharacters.some((lck) => lck.id == ch.id)
            )}
          />
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
