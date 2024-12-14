import { FormEvent, useState } from "react";
import useCharacterStore from "../../../store/use-character-store";
import Button from "../../atoms/button";
import Divider from "../../atoms/divider";
import Input from "../../atoms/input";
import SectionInfo from "../section-info";

interface CharacterDataProp {
  id: number;
  specie: string;
  status: string;
  occupation: string;
  comments?: string[];
}

const CharacterData = ({
  specie,
  status,
  occupation,
  comments,
  id,
}: CharacterDataProp) => {
  const [inputComment, setInputComment] = useState("");
  const updateComments = useCharacterStore((state) => state.updateComments);

  function handlerUpdateComments(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateComments(inputComment, id);
    setInputComment('')
  }

  return (
    <section className="w-full">
      <SectionInfo title="Specie" info={specie} />
      <Divider />
      <SectionInfo title="Status" info={status} />
      <Divider />
      <SectionInfo title="Occupation" info={occupation} />
      <form className="flex flex-col gap-5" onSubmit={handlerUpdateComments}>
        <Input
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
          placeholder="Comment"
        />
        <Button
          disabled={!inputComment}
          style={{ width: "200px", marginBottom: "20px" }}
        >
          Add
        </Button>
      </form>
      <Divider />
      <ul className="w-full flex flex-col item-center gap-4">
        {comments?.map((comment, i) => (
          <li className="border-custom_gray border rounded-[8px] w-full p-4" key={`${id}-${i}-${comment}`}>{comment}</li>
        ))}
      </ul>
    </section>
  );
};

export default CharacterData;
