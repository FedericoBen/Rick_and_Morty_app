import FilterInterface from "../../interfaces/filter.interface";

interface CalcFilterSelectedProps {
  checkFilter: FilterInterface;
  currentFilters: FilterInterface[];
  optionsBase: FilterInterface[];
  type: string;
  optionAll: number;
}

export default function calcFiltersSelected({
  checkFilter,
  currentFilters,
  optionsBase,
  type,
  optionAll,
}: CalcFilterSelectedProps) {
  if (checkFilter.type != type)
    return currentFilters.filter((fl) => fl.type == type);
  const existFilter = currentFilters.some(
    (filter) => filter.id == checkFilter.id
  );

  const filtersToUse = (
    existFilter
      ? currentFilters.filter((filter) => filter.id != checkFilter.id)
      : [...currentFilters, checkFilter]
  ).filter((fl) => fl.type == type);

  const wasSelectedAll =
    (!existFilter &&
      filtersToUse.filter((op) => op.depends).length ==
        optionsBase.length - 1) ||
    (checkFilter.id == optionAll && !existFilter);

  if (wasSelectedAll) return optionsBase;
  else if (checkFilter.id == optionAll) return [];
  else return filtersToUse.filter((fl) => fl.id != optionAll);
}
