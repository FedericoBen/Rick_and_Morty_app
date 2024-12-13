import FilterInterface from "../../../interfaces/filter.interface";
import OptionFilter from "../../atoms/option-filter";

interface SectionFilterProps {
  title: string;
  options: FilterInterface[];
  action: (newFilter: FilterInterface) => void;
  filersSelected: FilterInterface[];
}

const SectionFilter = ({
  title,
  options,
  action,
  filersSelected,
}: SectionFilterProps) => {
  return (
    <>
      <h3 className="text-[14px] text-gray">{title}</h3>
      <span className="flex gap-[8px] w-full justify-center">
        {options.map((option) => (
          <OptionFilter
            key={option.id}
            selected={filersSelected.some(
              (filter) => filter.id == option.id || filter.id == option.depends
            )}
            onClick={() => action(option)}
          >
            {option.name}
          </OptionFilter>
        ))}
      </span>
    </>
  );
};

export default SectionFilter;
