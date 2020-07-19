import fs from "fs";
export default function () {
  // const randCoverPage = Math.floor(Math.random() * 2200 + 1);
  // const randCoverImage = Math.floor(Math.random() * 25 + 1);
  // unsplash.searchPhotos("nature", null, randCoverPage, 25, function (
  //   error,
  //   photos,
  //   link
  // ) {
  //   console.log({ error });
  //   console.log({ photos });
  //   console.log({ link });
  //   fs.writeFile(
  //     "./public/randImg.json",
  //     JSON.stringify(photos[randCoverImage], null, 4),
  //     function (err) {
  //       if (err) {
  //         return console.error(err);
  //       }
  //       fs.readFile("./public/randImg.json", function (err, data) {
  //         if (err) {
  //           return console.error(err);
  //         }
  //         let json = JSON.parse(data);
  //         console.log("Retrieved json data ID: " + json.id);
  //       });
  //     }
  //   );
  // });
  return ["testing"];
}
