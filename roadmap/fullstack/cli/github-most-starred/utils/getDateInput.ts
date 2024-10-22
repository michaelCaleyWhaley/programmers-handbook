import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { testDateFormat } from "./testDateFormat.ts";

async function getDateInput(question: string) {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(`${question}: `);
  rl.close();

  const isDate = testDateFormat(answer);
  if (!isDate) {
    console.log("Incorrect date format.");
    return getDateInput(question);
  }

  return answer;
}

export { getDateInput };
