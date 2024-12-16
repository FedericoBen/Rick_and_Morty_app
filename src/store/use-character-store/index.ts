import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  Comment,
  DataCharacter,
} from "../../interfaces/all.character.data.interface";
import sortList from "../../utils/order-list";
import updateListComments from "../../utils/update-list-comments";

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
  updateComments: (comment: Comment, id: number) => void;
  deleteComment: (comment: Comment, id: number) => void;
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
            listLikedCharacters: updateListComments(
              state.listLikedCharacters,
              id,
              comment
            ),
            listCharacters: updateListComments(
              state.listCharacters,
              id,
              comment
            ),
          };
        }),
      deleteComment: (comment, id) =>
        set((state) => {
          const updateCharacter = state.listCharacters.find(
            (character) => character.id == id
          );
          if (!updateCharacter) return {};

          return {
            selectedCharacter: {
              ...updateCharacter,
              comments: updateCharacter.comments?.filter(
                (com) => com.id != comment.id
              ),
            },
            listCharacters: state.listCharacters.map((character) => {
              const previousListComments = character?.comments ?? [];
              return {
                ...character,
                comments:
                  character.id == id
                    ? previousListComments.filter((com) => com.id != comment.id)
                    : previousListComments,
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
        set((state) => ({
          listCharacters: sortList(state.listCharacters, order),
          listLikedCharacters: sortList(state.listLikedCharacters, order),
          listFilterCharacters: sortList(state.listFilterCharacters, order),
        })),
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
