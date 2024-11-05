import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LogoTikcer from "./sections/LogoTikcer";
import Pricing from "./sections/Pricing";
import ProductShowcase from "./sections/ProductShowcase";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTikcer />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
    </>
  );
}
