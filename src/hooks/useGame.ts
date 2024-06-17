import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platform: {platform: Platform}[]//array of objects where each object has a property of platform of type Platform
  metacritic: number;
}



const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', {
  params:
   {
    genres: selectedGenre?.id,
     parent_platform: selectedPlatform?.id
    } }, 
    [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;
