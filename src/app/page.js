import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <Navbar />
    </div>
  );
}
