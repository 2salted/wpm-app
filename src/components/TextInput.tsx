import { useState } from "react";
import { wpmTests } from "../words";

export default function TextInput() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputContent, setInputContent] = useState("");

  function pickRandomArray(array: string[][]) {
    let randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  }

  let correctWords = pickRandomArray(wpmTests);
  console.log(correctWords);

  return (
    <>
      <div>
        <div className="flex flex-col w-full lg:max-w-screen-xl">
          <div className="h-36 overflow-hidden">
            <div className="flex flex-wrap w-full pb-10">
              {correctWords.map((word, wordIndex) => {
                let extraLetters = "";
                if (wordIndex === currentWordIndex) {
                  extraLetters = inputContent.slice(word.length);
                }
                return (
                  <div
                    key={wordIndex}
                    className="flex text-2xl leading-loos pl-1 pr-2"
                  >
                    {word.split("").map((letter, letterIndex) => {
                      let letterColor = "text-neutral-500";
                      if (wordIndex < currentWordIndex) {
                        letterColor = "text-neutral-100";
                      } else if (wordIndex > currentWordIndex) {
                        letterColor = "text-neutral-500";
                      } else {
                        if (inputContent[letterIndex] !== undefined) {
                          if (inputContent[letterIndex] === letter) {
                            letterColor = "text-neutral-100";
                          } else {
                            letterColor = "text-red-500";
                          }
                        }
                      }
                      return (
                        <div className={`${letterColor}`} key={letterIndex}>
                          {letter}
                        </div>
                      );
                    })}
                    <div className="text-red-800">{extraLetters}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-5">
          <div>
            <input
              value={inputContent}
              className="bg-neutral-600 outline-none text-neutral-500"
              onChange={(e) => {
                setInputContent(e.target.value);
                if (correctWords[currentWordIndex] + " " === e.target.value) {
                  setCurrentWordIndex(currentWordIndex + 1);
                  setInputContent("");
                }
              }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
