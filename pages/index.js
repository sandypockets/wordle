import { useEffect, useState } from "react";
import WordGrid from "@/components/WordGrid/WordGrid";
import Keyboard from "@/components/Keyboard/Keyboard";

export default function Home() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [challengeWord, setChallengeWord] = useState("HELLO");
  const [letterStatuses, setLetterStatuses] = useState({});

  const onKeyPress = (key) => {
    if (key === "ENTER" || key === "Enter ⏎") {
      if (currentGuess.length === challengeWord.length) {
        updateLetterStatuses(currentGuess);
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");
      }
    } else if (key === "BACKSPACE" || key === "⌫") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (
      currentGuess.length < challengeWord.length &&
      /^[A-Z]$/.test(key)
    ) {
      if (
        !letterStatuses[key] ||
        letterStatuses[key] === "correct" ||
        letterStatuses[key] === "present"
      ) {
        setCurrentGuess(currentGuess + key);
      }
    }
  };

  const updateLetterStatuses = (guess) => {
    const newStatuses = { ...letterStatuses };

    guess.split("").forEach((letter, index) => {
      if (challengeWord[index] === letter) {
        newStatuses[letter] = "correct";
      } else if (challengeWord.includes(letter)) {
        if (newStatuses[letter] !== "correct") {
          newStatuses[letter] = "present";
        }
      } else {
        newStatuses[letter] = "absent";
      }
    });
    setLetterStatuses(newStatuses);
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      const key = event.key.toUpperCase();
      if (key === "ENTER" || key === "BACKSPACE" || /^[A-Z]$/.test(key)) {
        onKeyPress(key);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [currentGuess, guesses, challengeWord, letterStatuses]);

  return (
    <main className="p-4 h-screen">
      <h1 className="text-3xl mb-4">Wordle</h1>
      <WordGrid
        challengeWord={challengeWord}
        guesses={guesses}
        currentGuess={currentGuess}
      />
      <Keyboard onKeyPress={onKeyPress} letterStatuses={letterStatuses} />
    </main>
  );
}
