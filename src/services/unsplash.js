import axios from "axios";
import util from "util";
const client = axios.create({
  baseURL: "https://api.unsplash.com/",
});
export const unsplashQuery = async (query, categories = null, page = 1) => {
  console.log(process.env.UNSPLASH_ACCESS_KEY);
  try {
    const res = await client.get(
      `search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${query}&per_page=60&page=${page}`
    );
    console.log({ data: res.data });
    return res.data;
  } catch (error) {
    console.log({ error });
    return error;
  }
};
