import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full lg:max-w-screen-lg p-8">
          <Navbar />
        </div>
      </div>
    </>
  );
}
