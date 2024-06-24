import useData, { FetchResponse } from "./useData";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";


export interface Genre {
id: number;
name: string;
image_background: string;
}


// const useGenres = () => useData<Genre>('/genres');//first way using api changed in 8.36
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('./genres').then(res => res.data),//we dont need to use Genre[] as Genre will be automatically transformed to Genre[] in FetchResponse 
    staleTime: 24 * 60 * 60 * 1000,//for 24 hours our initial data will be fresh so no request will be sent to the backend until then
    initialData: {count: genres.length, results: genres} //instead a spinner we show them a static data
});
export default useGenres;