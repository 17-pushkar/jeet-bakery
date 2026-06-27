import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <Hero />

      <FeaturedProducts />

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