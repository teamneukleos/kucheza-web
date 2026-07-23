import AboutHero from "./abouthero";
import Gallery from "./gallery";
import WhoWeAre from "./mission-vision";
import Values from "./value";
import Cta from "./cta";

export default function About() {
  return (
    <main className="flex min-h-screen w-full flex-col">
        <AboutHero />
        <Gallery />
        <WhoWeAre />
        <Values />
        <Cta />
      
    </main>
  );
}