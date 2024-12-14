import Input from "../../atoms/input";
import FilterMenu from "../filter-menu";
import lenIcon from "../../../assets/icons/len_icon.svg";
import useCharacterStore from "../../../store/use-character-store";

const Filter = () => {
  const filterResults = useCharacterStore((state) => state.filterResults);

  return (
    <span className="flex relative items-center justify-between w-full bg-#F3F4F6] h-52 rounded-[8px] pt-9 pr-13 pb-9 pl-20">
      <img src={lenIcon} alt="lenIcon" />
      <Input
        onChange={(e) => filterResults(e.target.value)}
        placeholder="Search or filter results"
      />
      <FilterMenu />
    </span>
  );
};

export default Filter;
