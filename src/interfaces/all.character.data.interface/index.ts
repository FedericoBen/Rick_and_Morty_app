export interface DataCharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  comments?: string[];
  occupation?:string;
  like?:boolean;
}

export interface DataApi {
  characters: {
    info: {
      pages: number;
    };
    results: DataCharacter[];
  };
}
