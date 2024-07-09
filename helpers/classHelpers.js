export function getLetterStatusClass(letter, index, challengeWord) {
  if (challengeWord[index] === letter) {
    return "bg-green-500";
  } else if (challengeWord.includes(letter)) {
    return "bg-yellow-500";
  } else {
    return "bg-gray-500";
  }
}
