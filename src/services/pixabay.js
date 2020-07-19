import { searchImages } from "pixabay-api";

export const pixabayQuery = async (query, page) => {
  console.log("PIXABAY");
  return await searchImages(process.env.PIXABAY_ID, query, {
    per_page: 50,
    page: parseInt(page),
  }).then((r) => r);
};
