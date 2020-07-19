import getRandomImage from "@/services/getRandomImage";

const contents = JSON.stringify(getRandomImage());

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
