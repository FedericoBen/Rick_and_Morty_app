import Button from "../../components/atoms/button";
import SectionFilter from "../../components/molecules/section-filter";
import { optionsToAnalyze } from "../../constants/filters";
import useMenuFilterStore from "../../store/use-menu-filter-store";

interface UseCreateSectionsFilterProps {
  filterAction: () => void;
}

const useCreateSectionsFilter = ({
  filterAction,
}: UseCreateSectionsFilterProps) => {
  const filtersSelected = useMenuFilterStore((state) => state.filtersSelected);
  const changeFilter = useMenuFilterStore((state) => state.changeFilter);

  return (
    <>
      {Object.keys(optionsToAnalyze).map((key, i) => {
        const { title, optionsBase } =
          optionsToAnalyze[key as keyof typeof optionsToAnalyze];
        return (
          <SectionFilter
            key={`${key}-${i}`}
            filersSelected={filtersSelected}
            options={optionsBase}
            title={title}
            action={changeFilter}
          />
        );
      })}
      <Button disabled={filtersSelected.length == 0} onClick={filterAction}>
        Filter
      </Button>
    </>
  );
};

export default useCreateSectionsFilter;
