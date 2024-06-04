import Image from "next/image";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="">
      <HomeSection/>
      <AboutSection/>
    </main>
  );
}
