import axios from "axios";
import util from "util";
const client = axios.create({
  baseURL: "https://api.unsplash.com/",
});
export const unsplashQuery = async (query, categories = null, page = 1) => {
  return await client
    .get(
      `search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${query}&per_page=30&page=${page}`
    )
    .then((r) => {
      return r.data;
    });
};
