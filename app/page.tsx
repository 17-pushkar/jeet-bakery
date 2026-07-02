import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import FeaturedProducts from "@/components/FeaturedProducts";
import FastFoodCorner from "@/components/FastFoodCorner";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PartyHall from "@/components/PartyHall";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F3] text-[#1F1F1F]">
      <Navbar />

      <Hero />

      <ShopByCategory />

      <FeaturedProducts />

      <FastFoodCorner />

      <PartyHall />

      <WhyChooseUs />

      <div id="about">
        <About />
      </div>

      <Testimonials />

      <Gallery />

      <div id="contact">
        <Contact />
      </div>

      <Map />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}