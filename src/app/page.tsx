import Image from "next/image";
import FAQs from "./components/FAQs";
import LandingPage from "./components/LandingPage"

export default function Home() {
  return (
    <section className="bg-black">
    <LandingPage />
    <FAQs /> 
    </section>
  );
}

