import Pexels from "pexels-api-wrapper";

export const pexelsQuery = async (query, page) => {
  console.log("PEXELS");
  const client = new Pexels(process.env.PEXELS_ID);
  return await client.search(query, 60, 2).then((r) => r);
};
