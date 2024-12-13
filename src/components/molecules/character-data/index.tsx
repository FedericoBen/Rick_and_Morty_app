import Divider from "../../atoms/divider";
import SectionInfo from "../section-info";

interface CharacterDataProp {
  specie: string;
  status: string;
  occupation: string;
}

const CharacterData = ({ specie, status, occupation }: CharacterDataProp) => {
  return (
    <section className="w-full">
      <SectionInfo title="Specie" info={specie} />
      <Divider />
      <SectionInfo title="Status" info={status} />
      <Divider />
      <SectionInfo title="Occupation" info={occupation} />
    </section>
  );
};

export default CharacterData;
