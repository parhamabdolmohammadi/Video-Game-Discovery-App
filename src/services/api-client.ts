
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  next: string | null;
  count: number;
  results: T[];
}

const axiosInstance =  axios.create({
  baseURL: apiUrl,
  params: {
    key: apiKey,
    
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
  }

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id)
    .then(res => res.data)
  }
}

export default APIClient