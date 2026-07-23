import OurGames from "../components/ourgames";
import Hero from "./hero";
import OurGamesList from "./ourgameslist";
import Cta from "./cta";

export default function SundaySchoold() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero />
      <OurGamesList />
      <Cta />
      
    </main>
  );
}