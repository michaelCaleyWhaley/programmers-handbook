import sharp from "sharp";

import { opendir } from "node:fs/promises";
import path from "node:path";

void (async function compressImages(): Promise<void> {
  const dir = await opendir("./uncompressed-images");
  for await (const dirent of dir) {
    const sharpImg = sharp(
      `${path.resolve("uncompressed-images")}/${dirent.name}`
    );

    const { format } = await sharpImg.metadata();

    const compressedImg =
      format === "png"
        ? sharpImg[format as "png"]({ compressionLevel: 6 })
        : sharpImg[format as "jpeg" | "webp"]({ quality: 50 });

    await compressedImg.toFile(
      `${path.resolve("compressed-images")}/${dirent.name}`
    );
  }
})();
