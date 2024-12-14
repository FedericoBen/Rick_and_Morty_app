import { create } from "zustand";
import { persist } from "zustand/middleware";
import ORDER_RESULT from "../../constants/filters/order-result/index";
import { DataCharacter } from "../../interfaces/all.character.data.interface";

interface CharacterState {
  listCharacters: DataCharacter[];
  listFilterCharacters: DataCharacter[];
  listLikedCharacters: DataCharacter[];
  selectedCharacter: DataCharacter | null;
  loadListCharacter: (listCharacter: DataCharacter[]) => void;
  updateListLikedCharacter: (character: DataCharacter) => void;
  viewCharacter: (newCharacter: DataCharacter) => void;
  orderList: (order: string) => void;
  filterResults: (parameter: string) => void;
  updateComments: (comment: string, id: number) => void;
}

const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      listCharacters: [],
      listFilterCharacters: [],
      listLikedCharacters: [],
      selectedCharacter: null,
      updateComments: (comment, id) =>
        set((state) => {
          const updateCharacter = state.listCharacters.find(
            (character) => character.id == id
          );
          if (!updateCharacter) return {};

          return {
            selectedCharacter: {
              ...updateCharacter,
              comments: [comment, ...(updateCharacter.comments ?? [])],
            },
            listCharacters: state.listCharacters.map((character) => {
              const previousListComments = character?.comments ?? [];
              return {
                ...character,
                comments:
                  character.id == id
                    ? [comment, ...previousListComments]
                    : [...previousListComments],
              };
            }),
          };
        }),
      filterResults: (parameter) =>
        set((state) => ({
          listFilterCharacters: state.listCharacters.filter(
            (character) =>
              character.name
                .toLocaleLowerCase()
                .includes(parameter.toLocaleLowerCase()) ||
              character.status
                .toLocaleLowerCase()
                .includes(parameter.toLocaleLowerCase()) ||
              character.species
                .toLocaleLowerCase()
                .includes(parameter.toLocaleLowerCase())
          ),
        })),
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
