import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

function testDateFormat(input: string) {
  const regex = new RegExp(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/gi);
  return regex.test(input);
}

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

async function main() {
  const startDate = await getDateInput(
    "Please specify start date in format DD/MM/YYYY"
  );

  const endDate = await getDateInput(
    "Please specify end date in format DD/MM/YYYY"
  );

  console.log("startDate: ", startDate);
  console.log("endDate: ", endDate);
}

main();
