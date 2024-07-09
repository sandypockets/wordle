import KeyButton from "@/components/Keyboard/KeyButton";

export default function Keyboard({ onKeyPress, letterStatuses }) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  const getButtonClass = (key) => {
    if (letterStatuses[key] === "correct" || letterStatuses[key] === "present") {
      return "bg-green-500 text-black";
    } else if (letterStatuses[key] === "absent") {
      return "bg-gray-500 cursor-not-allowed";
    } else {
      return "bg-gray-900";
    }
  };

  return (
    <div className="flex flex-col items-center">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-2">
          {row.map((keyLabel) => (
            <KeyButton key={keyLabel} keyLabel={keyLabel} onKeyPress={onKeyPress} letterStatuses={letterStatuses} getButtonClass={getButtonClass} />
          ))}
        </div>
      ))}
      <button
        className={`border border-gray-300 h-10 w-24 m-1 rounded-md ${getButtonClass("ENTER")}`}
        onClick={() => onKeyPress("ENTER")}
      >
        ENTER ⏎
      </button>
    </div>
  )
}
