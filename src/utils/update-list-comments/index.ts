import {
  Comment,
  DataCharacter,
} from "../../interfaces/all.character.data.interface";

const updateListComments = (
  list: DataCharacter[],
  id: number,
  comment: Comment
) =>
  list.map((character) => {
    const previousListComments = character?.comments ?? [];
    return {
      ...character,
      comments:
        character.id == id
          ? [comment, ...previousListComments]
          : [...previousListComments],
    };
  });

export default updateListComments;
