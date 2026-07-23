import Hero from "./hero";
import Video from "./video";
import InstructorPartner from "./instructorpartner";
import Services from "./services";
import Courses from "./courses";
import PricingPlans from "./pricingplans";
import WhyChooseUs from "./whychooseus";
import Cta from "./cta";

export default function UnrealEngineTraining() {
  return (
    <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Video />
        <InstructorPartner />
        <Services />
        <Courses />
        <PricingPlans />
        <WhyChooseUs />
        <Cta />
        
      
    </main>
  );
}