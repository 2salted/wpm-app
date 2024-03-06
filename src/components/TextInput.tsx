import { wpmTests } from "../words";

export default function TextInput() {
  function pickRandomArray(array: string[][]) {
    let randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  }

  let pickedArray = pickRandomArray(wpmTests);

  return (
    <>
      <div>
        <div className="flex flex-col w-full lg:max-w-screen-xl">
          <div className="h-36 overflow-hidden">
            <div className="flex flex-wrap w-full pb-10">
              {pickedArray.map((word, index) => (
                <div
                  className="flex text-2xl leading-loose text-neutral-500 pl-1 pr-1"
                  key={index}
                >
                  {word.split("").map((letter, index) => (
                    <div key={index}>{letter}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-5">
          <div>
            <input className="bg-neutral-600 outline-none text-neutral-500"></input>
          </div>
        </div>
      </div>
    </>
  );
}
