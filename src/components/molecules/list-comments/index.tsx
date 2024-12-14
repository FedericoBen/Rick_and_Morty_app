import { Comment } from "../../../interfaces/all.character.data.interface";
import useCharacterStore from "../../../store/use-character-store";
import CommentItem from "../../atoms/comment-item";

interface ListCommentsProps {
  comments: Comment[];
  id: number;
}

const ListComments = ({ comments, id }: ListCommentsProps) => {
  const deleteComments = useCharacterStore((state) => state.deleteComment);
  return (
    <ul className="w-full flex flex-col item-center gap-4">
      {comments?.map((comment) => (
        <CommentItem
          key={comment.id}
          onDelete={() => deleteComments(comment, id)}
          comment={comment.comment}
        />
      ))}
    </ul>
  );
};

export default ListComments;
