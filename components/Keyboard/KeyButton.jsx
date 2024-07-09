export default function KeyButton({ keyLabel, onKeyPress, letterStatuses, getButtonClass }) {
  return (
    <button
      key={keyLabel}
      className={`border border-gray-300 h-10 w-7 m-0.5 rounded-md text-sm ${getButtonClass(keyLabel)}`}
      onClick={() => {
        if (letterStatuses[keyLabel] !== 'absent') onKeyPress(keyLabel)
      }}
    >
      {keyLabel}
    </button>
  )
}
