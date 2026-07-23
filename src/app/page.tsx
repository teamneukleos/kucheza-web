import Hero from "./components/hero";
import Video from "./components/video";
import WhoWeAre from "./components/who-we-are";
import Brands from "./components/brands";
import Services from "./components/services";
import OurGames from "./components/ourgames";
import Testimonials from "./components/testimonial";
import Cta from "./components/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero />
      <Video />
      <WhoWeAre />
      <Brands />
      <Services />
      <OurGames />
      <Testimonials />
      <Cta />
    </main>
  );
}