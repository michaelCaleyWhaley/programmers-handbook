import { createReadStream, createWriteStream } from "node:fs";

(function main() {
  const stream = createReadStream("./input.txt");
  const writeStream = createWriteStream("./output.txt");

  stream.on("data", (chunk) => {
    const chunkString = chunk.toString();
    const modifiedChunkString = chunkString.replace(/&/gi, "");
    writeStream.write(modifiedChunkString);
  });
})();
