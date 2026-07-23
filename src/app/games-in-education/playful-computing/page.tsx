import Hero from "./hero";
import Video from "./video";
import Brands from "./brands";
import Services from "./services";
import Workshops from "./workshop";
import Cta from "./cta";

export default function PlayfulComputing() {
  return (
    <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Video />
        <Brands />
        <Services />
        <Workshops />
        <Cta />
      
    </main>
  );
}