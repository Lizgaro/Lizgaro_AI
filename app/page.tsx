import { About } from "@/components/About";
import { BlogPreview } from "@/components/BlogPreview";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LifeOSSection } from "@/components/LifeOSSection";
import { Offers } from "@/components/Offers";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { siteConfig } from "@/data/site";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.siteUrl,
      sameAs: siteConfig.socials.filter((item) => item.href.startsWith("http")).map((item) => item.href),
      knowsAbout: siteConfig.seo.keywords
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      inLanguage: "ru-RU",
      description: siteConfig.seo.description
    }
  ];

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
        <BlogPreview />
        <FAQ />
        <ContactCTA />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </>
  );
}
