import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutOscar from "./components/AboutOscar";
import Testimonials from "./components/Testimonials";
import Offers from "./components/Offers";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutOscar />
      <Testimonials />
      <Offers />
      <FAQ />
    </main>
  );
}