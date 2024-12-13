import { create } from "zustand";
import FilterInterface from "../../interfaces/filter.interface";
import calcFiltersSelected from "../../utils/calc-filter-selected";
import { optionsToAnalyze } from "../../constants/filters";

interface MenuFilterState {
  filtersSelected: FilterInterface[];
  changeFilter: (filter: FilterInterface) => void;
}

const useMenuFilterStore = create<MenuFilterState>((set) => ({
  filtersSelected: [],
  changeFilter: (filter) =>
    set((state) => {
      const newFilters = Object.keys(optionsToAnalyze).flatMap((key) =>
        calcFiltersSelected({
          ...optionsToAnalyze[key as keyof typeof optionsToAnalyze],
          currentFilters: state.filtersSelected,
          checkFilter: filter,
        })
      );
      return {
        filtersSelected: [...newFilters],
      };
    }),
}));

export default useMenuFilterStore;
