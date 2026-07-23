import Hero from "./hero";
import Video from "./video";
import Brands from "./brands";
import WhyEsports from "./whyesport";
import Projects from "./project";
import Tournament from "./tournament";
import Cta from "./cta";

export default function Esports() {
  return (
    <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Video />
        <Brands />
        <WhyEsports />
        <Projects />
        <Tournament />
        <Cta />
        
    </main>
  );
}