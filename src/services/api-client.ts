

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f69de021dee04366a8eef44e5d15eeeb",
  },
});
