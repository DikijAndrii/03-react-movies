import axios, { type AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const Base_Url = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface fethMoviesProps {
  results: Movie[];
}

async function fethMovies(query: string): Promise<Movie[]> {
  const res: AxiosResponse<fethMoviesProps> = await axios.get(
    `${Base_Url}/search/movie`,
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  return res.data.results;
}

export default fethMovies;
