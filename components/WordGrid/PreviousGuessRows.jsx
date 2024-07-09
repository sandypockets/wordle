import { useState, useEffect } from "react";

export default function PreviousGuessRows({
  guess,
  getLetterStatusClass,
  challengeWord,
  isLastRow,
}) {
  const [triggerCardFlip, setTriggerCardFlip] = useState(false);

  useEffect(() => {
    if (isLastRow) {
      setTimeout(() => setTriggerCardFlip(true), 300);
    }
  }, [isLastRow]);

  return (
    <div className="flex justify-center mb-2">
      {guess.split("").map((letter, index) => (
        <div
          className={`relative h-14 w-14 mx-1 ${triggerCardFlip ? "flip" : ""}`}
          key={index}
        >
          <div className="flip-inner">
            <div
              className={`flip-front absolute inset-0 border border-gray-500 flex items-center justify-center`}
            >
              {letter}
            </div>
            <div
              className={`flip-back absolute inset-0 border border-gray-500 flex items-center justify-center ${getLetterStatusClass(letter, index, challengeWord)}`}
            >
              {letter}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
