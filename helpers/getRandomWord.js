import fs from "fs";
import path from "path";

export function getRandomWord() {
  const wordListPath = path.join(process.cwd(), "words", "wordlist.txt");
  const wordList = fs.readFileSync(wordListPath, "utf8").split("\n");
  return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
}
