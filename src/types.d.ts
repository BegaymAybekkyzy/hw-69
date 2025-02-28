interface TVList {
  id: number;
  name: string;
}

interface TV_API {
  score: number;
  show: TVList;
}

interface TVShowAPI {
  id: number;
  name: string;
  type: string;
  language: string;
  summary: string;
  genres: string[];
  status: string;
  country: string;
  premiered: string;
  ended: string;
  officialSite: string;
  rating: { average: number };
  image: {
    medium: string;
    original: string;
  };
}

interface TVShow extends Omit<TVShowAPI, "rating"> {
  rating: number;
}
