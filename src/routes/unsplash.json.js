import { unsplashQuery } from "@/services/unsplash";

export async function get(req, res) {
  const queryResult = await unsplashQuery(
    req.query.query,
    null,
    req.query.page || 1
  );
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(queryResult));
}
