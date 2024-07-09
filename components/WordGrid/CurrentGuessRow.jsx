import LetterBox from "@/components/WordGrid/LetterBox";

export default function CurrentGuessRow({ currentGuess, gridWidth }) {
  return (
    <div className="flex justify-center mb-2">
      {currentGuess.split("").map((letter, index) => (
        <LetterBox
          key={index}
          letter={letter}
          statusClass=""
        />
      ))}
      {Array.from(Array(gridWidth - currentGuess.length)).map((_, index) => (
        <LetterBox
          key={index}
          letter=""
          statusClass=""
        />
      ))}
    </div>
  )
}
