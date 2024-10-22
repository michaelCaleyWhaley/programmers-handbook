import { argv } from "node:process";
import { readFile, writeFile } from "fs/promises";
import * as cheerio from "cheerio";

async function getText() {
  const fileContents = await readFile("./text.json");
  return JSON.parse(fileContents.toString());
}

function getInput() {
  const input = argv.find((val) => val.match(/URL=/g)) ?? null;
  if (!input) return null;
  return input.split("=")[1];
}

async function getHTML(url) {
  const response = await fetch(url);
  return await response.text();
}

function parseHTML(html) {
  const $ = cheerio.load(html);
  return $("h1").first().text();
}

async function getOutput() {
  const text = await getText();
  const input = getInput();
  if (!input) return text.invalidInput;
  const html = await getHTML(input);
  const parsedText = parseHTML(html);
  if (!parsedText) return text.emptyElement;
  await writeFile("./output.txt", parsedText);
  return text.success;
}

(async function main() {
  const output = await getOutput();
  console.log(output);
})();
