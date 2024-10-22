import { getDateInput } from "./utils/getDateInput.ts";
import { getStarredRepos } from "./utils/getStarredRepos.ts";
import { writeOutput } from "./utils/writeOutput.ts";

(async function main() {
  const startDate = await getDateInput(
    "Please specify start date in format DD/MM/YYYY"
  );
  const endDate = await getDateInput(
    "Please specify end date in format DD/MM/YYYY"
  );
  const repoJson = await getStarredRepos(startDate, endDate);
  writeOutput(JSON.stringify(repoJson));
})();
