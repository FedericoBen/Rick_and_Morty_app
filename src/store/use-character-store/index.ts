import { create } from "zustand";
import { persist } from "zustand/middleware";
import ORDER_RESULT from "../../constants/filters/order-result/index";

export interface CharacterProps {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  occupation: string;
  like: boolean;
}

interface CharacterState {
  listCharacters: CharacterProps[];
  listLikedCharacters: CharacterProps[];
  selectedCharacter: CharacterProps | null;
  loadListCharacter: (listCharacter: CharacterProps[]) => void;
  updateListLikedCharacter: (character: CharacterProps) => void;
  viewCharacter: (newCharacter: CharacterProps) => void;
  orderList: (order: string) => void;
}

const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      listCharacters: [],
      listLikedCharacters: [],
      selectedCharacter: null,
      loadListCharacter: (listCharacters) => set(() => ({ listCharacters })),
      orderList: (order) =>
        set((state) => {
          const orderList = [...state.listCharacters].sort((a, b) =>
            order == ORDER_RESULT.ASCENDANT
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name)
          );
          const orderListLike = [...state.listLikedCharacters].sort((a, b) =>
            order == ORDER_RESULT.ASCENDANT
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name)
          );
          return {
            listCharacters: orderList,
            listLikedCharacters: orderListLike,
          };
        }),
      viewCharacter: (character) =>
        set(() => ({
          selectedCharacter: character,
        })),
      updateListLikedCharacter: (character) =>
        set((state) => {
          const modifiedCharacter = { ...character, like: !character.like };
          return {
            selectedCharacter: modifiedCharacter,
            listCharacters: state.listCharacters.map((ch) =>
              ch.id == character.id ? modifiedCharacter : ch
            ),
            listLikedCharacters: modifiedCharacter.like
              ? [...state.listLikedCharacters, modifiedCharacter]
              : state.listLikedCharacters.filter((ch) => ch.id != character.id),
          };
        }),
    }),
    {
      name: "CHARACTER_STORE",
    }
  )
);

export default useCharacterStore;
