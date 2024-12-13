export interface DataResults {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

export interface DataApi {
  characters: {
    info: {
      pages: number;
    };
    results: DataResults[];
  };
}
