import CurrentGuessRow from "@/components/WordGrid/CurrentGuessRow";

export default function RemainingEmptyRows({ emptyRows, gridWidth }) {
  return (
    <div>
      {Array.from({ length: emptyRows }, (_, index) => (
        <div key={`empty-${index}`}>
          <CurrentGuessRow gridWidth={gridWidth} currentGuess="" />
        </div>
      ))}
    </div>
  );
}
