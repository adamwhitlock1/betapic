import { query } from "@/services/pixabay";

export async function get(req, res) {
  console.log(req.query);
  const queryResult = await query(req.query.query, req.query.page || 1);
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(queryResult));
}
