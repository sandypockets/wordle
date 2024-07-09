import { getRandomWord } from "@/helpers/getRandomWord";

export default function handler(req, res) {
  if (req.method === "GET") {
    const randomWord = getRandomWord();
    res.status(200).json({ word: randomWord });
  } else {
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
