import { ALL_CHARACTERS } from "../../hooks/use-get-all";

export const mocks = [
  {
    request: {
      query: ALL_CHARACTERS,
    },
    result: {
      data: {
        characters: {
          results: [
            { id: 1, name: "Rick Sanchez" },
            { id: 2, name: "Morty Smith" },
          ],
        },
      },
    },
  },
];
