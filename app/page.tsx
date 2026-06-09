import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import MenuDia from "@/components/MenuDia";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <MenuDia />
      <Schedule />
      <Gallery />
      <Reviews />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
