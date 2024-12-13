import { DataResults } from "../../interfaces/all.character.data.interface";
import { CharacterProps } from "../../store/use-character-store";

const mapData = (data: DataResults[], preloadData?: CharacterProps[]) =>
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
