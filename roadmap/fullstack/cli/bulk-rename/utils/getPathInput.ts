import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function getInput(question: string): Promise<string> {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(question);

  rl.close();

  return answer;
}

export { getInput };
