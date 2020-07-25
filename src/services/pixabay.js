import { searchImages } from "pixabay-api";

export const pixabayQuery = async (query, page) => {
  return await searchImages(process.env.PIXABAY_ID, query, {
    per_page: 35,
    page: parseInt(page),
  }).then((r) => r);
};
