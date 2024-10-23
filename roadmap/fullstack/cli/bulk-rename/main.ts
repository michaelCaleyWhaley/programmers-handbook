import { readdirSync, renameSync } from "node:fs";
import { getInput } from "./utils/getPathInput.ts";

(async function main() {
  const folderPath = await getInput("Please specify path to folder: ");
  const newName = await getInput("Please specify file naming: ");

  const files = readdirSync(folderPath);

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const fileExtMatch = file.match(/(\.\w+)/gi);
    const fileExt = fileExtMatch ? [fileExtMatch] : "";
    const newFilePath = `${newName}_${i + 1}${fileExt}`;

    if (files.includes(newFilePath)) {
      console.log("warning: new file path already exists.");
      break;
    }

    renameSync(`${folderPath}/${file}`, `${folderPath}/${newFilePath}`);
  }
})();
