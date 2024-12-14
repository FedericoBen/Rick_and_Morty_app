import { gql, useLazyQuery } from "@apollo/client";
import mapData from "../../utils/map-data";
import useCharacterStore from "../../store/use-character-store";
import useMenuFilterStore from "../../store/use-menu-filter-store";
import { DataApi } from "../../interfaces/all.character.data.interface";
import useLoadingStore from "../../store/use-loading";

const GET_CHARACTERS_BY_PAGE_FILTER = gql`
  query getCharacterByPageFilter(
    $species: String
    $status: String
    $name: String
  ) {
    characters(filter: { species: $species, status: $status, name: $name }) {
      results {
        id
        image
        name
        status
        species
      }
    }
  }
`;

const useFilter = () => {
  const [filterCharacters] = useLazyQuery<DataApi>(
    GET_CHARACTERS_BY_PAGE_FILTER
  );
  const changeLoading = useLoadingStore((state) => state.changeLoading);

  const loadListCharacter = useCharacterStore(
    (state) => state.loadListCharacter
  );
  const listCharacters = useCharacterStore((state) => state.listCharacters);
  const filtersSelected = useMenuFilterStore((state) => state.filtersSelected);
  async function handlerFilter() {
    try {
      changeLoading(true);
      const resp = await Promise.all(
        [...filtersSelected].map((fl) =>
          filterCharacters({ variables: { [fl.type]: fl.name } })
        )
      );

      // Extraer y combinar resultados
      const combinedResults = resp.flatMap(
        ({ data }) => data?.characters.results ?? []
      );

      // Eliminar duplicados
      const uniqueResults = Array.from(
        new Map(combinedResults.map((item) => [item.id, item])).values()
      );

      // Cargar resultados únicos
      loadListCharacter(mapData(uniqueResults, listCharacters));
    } catch (error) {
      console.error(error);
    } finally {
      changeLoading(false);
    }
  }
  return { handlerFilter };
};

export default useFilter;
