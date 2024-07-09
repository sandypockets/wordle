import LetterBox from "@/components/WordGrid/LetterBox";

export default function PreviousGuessRows({ guess, getLetterStatusClass, challengeWord }) {
  return (
    <div className="flex justify-center mb-2">
      {guess.split("").map((letter, index) => (
        <LetterBox
          key={index}
          letter={letter}
          statusClass={getLetterStatusClass(letter, index, challengeWord)}
        />
      ))}
    </div>
  )
}
