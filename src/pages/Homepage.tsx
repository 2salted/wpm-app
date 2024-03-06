import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";

export default function Homepage() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="w-full lg:max-w-screen-xl p-8">
          <Navbar />
          <div className="h-3/5 flex items-end justify-center font-robotoRegular">
            <TextInput />
          </div>
        </div>
      </div>
    </>
  );
}
