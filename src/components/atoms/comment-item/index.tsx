import { MdOutlineDelete } from "react-icons/md";

interface CommentItemProps {
  comment: string;
  onDelete: () => void;
}

const CommentItem = ({ comment, onDelete }: CommentItemProps) => {
  return (
    <li className="border-gray-200 border rounded-[8px] w-full p-8 flex justify-between">
      {comment}
      <MdOutlineDelete
        className="cursor-pointer"
        onClick={onDelete}
        size={20}
      />
    </li>
  );
};

export default CommentItem;
