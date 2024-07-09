export default function KeyButton({
  keyLabel,
  onKeyPress,
  letterStatuses,
  getButtonClass,
}) {
  return (
    <button
      key={keyLabel}
      className={`border border-gray-300 h-11 w-8 my-0.5 mx-[0.13rem] rounded-md text-sm ${getButtonClass(keyLabel)}`}
      onClick={() => {
        if (letterStatuses[keyLabel] !== "absent") onKeyPress(keyLabel);
      }}
    >
      {keyLabel}
    </button>
  );
}
