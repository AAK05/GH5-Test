import Image from "next/image";
import FAQs from "./components/FAQs";
import LandingPage from "./components/LandingPage"
import Tracks from "./components/Tracks"

export default function Home() {
  return (
    <section className="bg-black">
    <LandingPage />
    <Tracks />
    <FAQs /> 
    </section>
  );
}

