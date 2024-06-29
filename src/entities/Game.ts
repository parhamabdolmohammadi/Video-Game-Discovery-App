import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[]; //array of objects where each object has a property of platform of type Platform
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}
