import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Advantages } from "@/components/sections/advantages";
import { Course } from "@/components/sections/course";
import { Pricing } from "@/components/sections/pricing";
import { Application } from "@/components/sections/application";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Advantages />
      <Course />
      <Pricing />
      <Application />
      <Footer />
    </main>
  );
}
