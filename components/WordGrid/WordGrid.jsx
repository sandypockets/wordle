import CurrentGuessRow from "@/components/CurrentGuessRow";
import PreviousGuessRows from "@/components/PreviousGuessRows";

function getLetterStatusClass(letter, index, challengeWord) {
  if (challengeWord[index] === letter) {
    return "bg-green-500";
  } else if (challengeWord.includes(letter)) {
    return "bg-yellow-500";
  } else {
    return "bg-gray-500";
  }
}

export default function WordGrid({ challengeWord, guesses, currentGuess }) {
  const gridWidth = challengeWord.length;

  return (
    <div className="flex flex-col mb-2">
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex}>
          <PreviousGuessRows
            guess={guess}
            getLetterStatusClass={getLetterStatusClass}
            challengeWord={challengeWord}
          />
        </div>
      ))}
      {guesses.length < 5 && (
        <CurrentGuessRow
          gridWidth={gridWidth}
          currentGuess={currentGuess}
        />
      )}
    </div>
  );
}
