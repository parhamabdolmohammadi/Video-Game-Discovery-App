
import APIClient from "../services/api-client";
import { Trailer } from "../entities/trailer";
import { useQuery } from "@tanstack/react-query";



const useTrailers = (gameId: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);




   return useQuery({
   queryKey: ['trailers', gameId],
   queryFn: apiClient.getAll,
})
}

export default useTrailers;