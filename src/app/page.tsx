import Image from "next/image";
import MenuItem from "./components/Navbar";
import Footer from "./components/Footer";
import News from "@/app/dashboard/News"
import HeroSections from "@/app/dashboard/Hero_sections"
import AboutHero from "./about/hero";
export default function Home() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] gap-16">
      <header className="w-full">
      <MenuItem />
     
       <HeroSections/>
        </header>
      <main className="flex justify-center px-8 sm:px-20">
        {/* ...rest of your content... */}
      
      </main>
       <News></News>
      
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}