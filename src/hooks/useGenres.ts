
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from 'ms';
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

// const useGenres = () => useData<Genre>('/genres');//first way using api changed in 8.36
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn:  apiClient.getAll,//we dont need to use Genre[] as Genre will be automatically transformed to Genre[] in FetchResponse 
    staleTime: ms('24h'),//for 24 hours our initial data will be fresh so no request will be sent to the backend until then
    initialData: {count: genres.length, results: genres, next: null} //instead a spinner we show them a static data
});
export default useGenres;