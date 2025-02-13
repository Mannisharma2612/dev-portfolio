import Experience from "@/components/molecules/Experience";
import Hero from "@/components/molecules/Hero";
import Projects from "@/components/molecules/Projects";
import Skills from "@/components/molecules/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 mx-auto">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}
