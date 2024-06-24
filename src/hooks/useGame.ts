import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]//array of objects where each object has a property of platform of type Platform
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () =>
    apiClient.get<FetchResponse<Game>>('/games', {
    params:
   {
    genres: gameQuery.genre?.id,
     parent_platform: gameQuery.platform?.id,
     ordering: gameQuery.sortOrder,
     search: gameQuery.searchText
    } 
  }).then(res => res.data)
  ,
  staleTime: 24 * 60 * 60 * 1000,
})

// const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
//   params:
//    {
//     genres: gameQuery.genre?.id,
//      parent_platform: gameQuery.platform?.id,
//      ordering: gameQuery.sortOrder,
//      search: gameQuery.searchText
//     } }, 
//     [gameQuery]);

export default useGames;
