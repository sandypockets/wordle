export function getLetterBackgroundColor(guess, challengeWord) {
  const word = String(challengeWord);
  const letterCount = {};
  const status = Array(guess.length).fill("bg-gray-500");
  const yellowCandidates = [];

  function countLetterOccurrences(word) {
    for (const letter of word.split("")) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }

  function applyGreensAndIdentifyYellows(guess) {
    guess.split("").forEach((letter, index) => {
      if (letter === word[index]) {
        status[index] = "bg-green-500";
        letterCount[letter]--;
      } else if (word.includes(letter)) {
        yellowCandidates.push({ letter, index });
      }
    });
  }

  function applyYellowsIfApplicable(yellowCandidates) {
    yellowCandidates.forEach(({ letter, index }) => {
      if (letterCount[letter] > 0) {
        status[index] = "bg-yellow-500";
        letterCount[letter]--;
      }
    });
  }

  countLetterOccurrences(word);
  applyGreensAndIdentifyYellows(guess);
  applyYellowsIfApplicable(yellowCandidates);

  return status;
}
