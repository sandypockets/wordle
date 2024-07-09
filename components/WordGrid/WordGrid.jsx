import CurrentGuessRow from "@/components/WordGrid/CurrentGuessRow";
import PreviousGuessRows from "@/components/WordGrid/PreviousGuessRows";
import RemainingEmptyRows from "@/components/WordGrid/RemainingEmptyRows";

export default function WordGrid({ challengeWord, guesses, currentGuess }) {
  const gridWidth = challengeWord.length;
  const totalGuessesAllowed = 5;
  const emptyRows = totalGuessesAllowed - guesses.length - (currentGuess ? 1 : 0);
  const allGuessesUsed = guesses.length === totalGuessesAllowed;
  const isCorrectGuessIncluded = guesses.includes(challengeWord);

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
      {currentGuess && !allGuessesUsed && (
        <CurrentGuessRow gridWidth={gridWidth} currentGuess={currentGuess} />
      )}
      <RemainingEmptyRows emptyRows={emptyRows} gridWidth={gridWidth} />
      {allGuessesUsed && !isCorrectGuessIncluded && (
        <div className="text-center mt-4">
          <p className="text-lg font-semibold">The correct word was: <a target="_blank" className="text-green-500 hover:text-green-600" href={`https://www.merriam-webster.com/dictionary/${challengeWord}`}>{challengeWord}</a></p>
        </div>
      )}
    </div>
  );
}
