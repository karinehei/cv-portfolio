import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { QaTesting } from "@/components/sections/QaTesting";
import { CvDownload } from "@/components/sections/CvDownload";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <QaTesting />
      <Projects />
      <CvDownload />
      <Contact />
    </>
  );
}
