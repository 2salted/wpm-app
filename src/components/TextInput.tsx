import { useState } from "react";
import { wpmTests } from "../words";

export default function TextInput() {
  
  function pickRandomArray(array: string[][]) {
    let randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  }

  let pickedArray = pickRandomArray(wpmTests);
  // let startingLetter = pickedArray[0][0];
  let arrayIntoLetters = pickedArray
    .toString()
    .split("")
    .filter((letter) => letter !== ",");

  console.log(arrayIntoLetters);

  return (
    <>
      <div>
        <div className="flex flex-col w-full lg:max-w-screen-xl">
          <div className="h-36 overflow-hidden">
            <div className="flex flex-wrap w-full pb-10">
              {pickedArray.map((word, wordIndex) => (
                <div
                  key={wordIndex}
                  className="flex text-2xl leading-loose text-neutral-500 pl-1 pr-2"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <div key={letterIndex}>{letter}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-5">
          <div>
            <input
              className="bg-neutral-600 outline-none text-neutral-500"
              onChange={(e) => {
                if (e.target.value) {
                  console.log(e.target.value);
                }
              }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
