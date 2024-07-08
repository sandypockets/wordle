import WordGrid from "@/components/wordGrid";
import Keyboard from "@/components/Keyboard";

export default function Home() {
  const challengeWord = "WORDS"

  return (
    <main>
      <h1>Wordle</h1>
      <WordGrid challengeWord={challengeWord} />
      <Keyboard />
    </main>
  );
}
