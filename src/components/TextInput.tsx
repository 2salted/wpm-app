import { wpmTests } from "../words";

export default function TextInput() {
  function pickRandomArray(array: string[][]) {
    let randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  }

  let pickedArray = pickRandomArray(wpmTests);

  return (
    <>
      <div className="flex flex-col font-robotoRegular w-full lg:max-w-screen-xl">
        <div className="flex flex-wrap w-full pb-10">
          {pickedArray.map((word, index) => (
            <div
              className="flex text-2xl leading-10 text-neutral-500"
              key={index}
            >
              {word}
            </div>
          ))}
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
