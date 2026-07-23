import Hero from "./hero";
import Intro from "./intro";
import FeatureCarousel from "./featurecarousel";
import BentoCarousel from "./bentocarousel";
import Outro from "./outro";

export default function SundaySchoold() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero image="/sunday-schoold/hero-bg.png" />
      <Intro />
      <FeatureCarousel />
      <BentoCarousel />
      <Outro />
      
    </main>
  );
}