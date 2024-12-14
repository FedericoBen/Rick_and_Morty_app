import { DataCharacter } from "../../interfaces/all.character.data.interface";

const mapData = (data: DataCharacter[], preloadData?: DataCharacter[]) =>
  data.map((character) => {
    const preloadedCharacter = preloadData?.find((ch) => ch.id == character.id);
    if (preloadedCharacter) {
      return { ...preloadedCharacter };
    }
    return {
      ...character,
      like: false,
      occupation: "Nada",
    };
  });

export default mapData;
