import Image from "next/image";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="">
      <HomeSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  );
}
