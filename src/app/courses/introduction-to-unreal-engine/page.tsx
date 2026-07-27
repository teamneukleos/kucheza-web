import Hero from "./hero"
import Video from "./intro-img";
import CourseOverview from "./course-overview";
import CourseContent from "./course-content";
import Courses from "./courses";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero />
      <Video />
      <CourseOverview />
      <CourseContent />
      <Courses />
    </main>
  );
}