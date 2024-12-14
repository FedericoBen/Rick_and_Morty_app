export interface DataCharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  comments?: Comment[];
  occupation?: string;
  like?: boolean;
}

export interface Comment {
  id: string;
  comment: string;
}

export interface DataApi {
  characters: {
    info: {
      pages: number;
    };
    results: DataCharacter[];
  };
}
