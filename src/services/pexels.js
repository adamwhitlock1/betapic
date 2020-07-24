import { createClient } from "pexels";

export const pexelsQuery = async (query, page) => {
  const client = createClient(process.env.PEXELS_ID);
  return await client.photos.search({ query, per_page: 30 }).then((r) => r);
};
