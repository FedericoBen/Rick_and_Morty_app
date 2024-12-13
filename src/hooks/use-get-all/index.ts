import { gql, useQuery } from "@apollo/client";
import { DataApi } from "../../interfaces/all.character.data.interface";

export const ALL_CHARACTERS = gql`
  query {
    characters {
      info {
        pages
      }
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;

const useGetAll = () => {
  const result = useQuery<DataApi>(ALL_CHARACTERS);
  return result;
};

export default useGetAll;
