import { pexelsQuery } from "@/services/pexels";

export async function get(req, res) {
  const queryResult = await pexelsQuery(req.query.query, req.query.page || 1);
  console.log(queryResult);
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(queryResult));
}
