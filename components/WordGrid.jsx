import { useState } from "react";

export default function WordGrid({challengeWord}) {
  return (
    <div>
      <div className="flex justify-center">
        {challengeWord.split("").map((letter, index) => (
          <div key={index} className="border border-white h-12 w-12 m-1"></div>
        ))}
      </div>
    </div>
  )
}
