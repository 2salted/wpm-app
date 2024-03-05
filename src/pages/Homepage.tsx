import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";

export default function Homepage() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="w-full lg:max-w-screen-xl p-8">
          <Navbar />
          <div className="h-full flex items-center justify-center">
            <TextInput />
          </div>
        </div>
      </div>
    </>
  );
}
