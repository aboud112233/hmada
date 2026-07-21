import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Pricing />
      <Products />
      <Testimonials />
      <FAQ />
      <Location />
      <Booking />
      <Footer />
    </main>
  );
}

