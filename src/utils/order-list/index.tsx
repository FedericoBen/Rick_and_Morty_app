import ORDER_RESULT from "../../constants/filters/order-result";
import { DataCharacter } from "../../interfaces/all.character.data.interface";

const sortList = (list: DataCharacter[], order: string) =>
  [...list].sort((a, b) =>
    order == ORDER_RESULT.ASCENDANT
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

export default sortList;
