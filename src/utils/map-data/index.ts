import { DataCharacter } from "../../interfaces/all.character.data.interface";
import { CharacterProps } from "../../store/use-character-store";

const mapData = (data: DataCharacter[], preloadData?: CharacterProps[]) =>
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
