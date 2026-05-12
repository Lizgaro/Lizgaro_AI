import { About } from "@/components/About";
import { BlogPreview } from "@/components/BlogPreview";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JournalSection } from "@/components/JournalSection";
import { LifeOSSection } from "@/components/LifeOSSection";
import { Offers } from "@/components/Offers";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { ServicesAccordion } from "@/components/ServicesAccordion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesAccordion />
        <Projects />
        <Offers />
        <Process />
        <LifeOSSection />
        <JournalSection />
        <BlogPreview />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
