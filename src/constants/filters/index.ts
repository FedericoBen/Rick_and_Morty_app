import { optionCharacters } from "./filter-characters";
import { optionsSpecies } from "./filter-species";
// import { optionsCharacters } from "./filter-species copy";

export const optionsToAnalyze = {
  status: {
    optionsBase: optionCharacters,
    type: "status",
    title: "Status",
    optionAll: 1,
  },
  species: {
    optionsBase: optionsSpecies,
    type: "species",
    title: "Species",
    optionAll: 4,
  },
  // characters:{
  //   optionsBase: optionsCharacters,
  //   type: "characters",
  //   title: "Characters",
  //   optionAll: 7,
  // },
};
