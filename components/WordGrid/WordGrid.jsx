import CurrentGuessRow from "@/components/WordGrid/CurrentGuessRow";
import PreviousGuessRows from "@/components/WordGrid/PreviousGuessRows";
import RemainingEmptyRows from "@/components/WordGrid/RemainingEmptyRows";

export default function WordGrid({ challengeWord, guesses, currentGuess }) {
  const gridWidth = challengeWord.length;
  const totalGuessesAllowed = 5;
  const emptyRows =
    totalGuessesAllowed - guesses.length - (currentGuess ? 1 : 0);

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
      {currentGuess && (
        <CurrentGuessRow gridWidth={gridWidth} currentGuess={currentGuess} />
      )}
      <RemainingEmptyRows emptyRows={emptyRows} gridWidth={gridWidth} />
    </div>
  );
}
