import GameArtCodevHero from "./hero";
import GameArtShowcase from "./game-art-showcase";
import Portfolio from "./portfolio";
import Services from "./services";
import WhyChooseUs from "./whychooseus";
import Cta from "./cta";

export default function GameArtCoDev() {
  return (
    <main className="flex min-h-screen w-full flex-col">
        <GameArtCodevHero />
        <GameArtShowcase />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <Cta />
      
    </main>
  );
}