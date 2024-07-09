import CurrentGuessRow from "@/components/WordGrid/CurrentGuessRow";
import PreviousGuessRows from "@/components/WordGrid/PreviousGuessRows";

export default function WordGrid({ challengeWord, guesses, currentGuess }) {
  const gridWidth = challengeWord.length;

  return (
    <div className="flex flex-col mb-4">
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex}>
          <PreviousGuessRows
            guess={guess}
            challengeWord={challengeWord}
            isLastRow={rowIndex === guesses.length - 1}
          />
        </div>
      ))}
      {guesses.length < 5 && (
        <CurrentGuessRow gridWidth={gridWidth} currentGuess={currentGuess} />
      )}
    </div>
  );
}
