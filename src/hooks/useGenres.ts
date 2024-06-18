import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
id: number;
name: string;
image_background: string;
}


// const useGenres = () => useData<Genre>('/genres');//first way using api changed in 8.36
const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;