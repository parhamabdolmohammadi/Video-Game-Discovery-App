import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatform";

const apiClient = new APIClient<Game>('/games');
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]//array of objects where each object has a property of platform of type Platform
  metacritic: number;
  rating_top: number;
}


const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) =>
      apiClient.getAll({ params:
        {
         genres: gameQuery.genreId,
          parent_platform: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
         } })
    ,
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
      return  lastPage.next ? allPages.length + 1: undefined;
   }
  })
}
 

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
