import { writeFileSync } from "node:fs";

function writeOutput(output: string) {
  writeFileSync("output.json", JSON.stringify(output));
  console.log("Data successfully written to output.json");
}

export { writeOutput };
