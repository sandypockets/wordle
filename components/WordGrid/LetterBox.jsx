export default function LetterBox({ letter, statusClass }) {
  return (
    <div
      className={`border border-gray-500 h-14 w-14 text-lg flex items-center justify-center mx-1 ${statusClass}`}
    >
      {letter}
    </div>
  );
}
