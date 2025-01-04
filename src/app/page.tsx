
import About from "./sections/about/about";
import Booking from "./sections/book/booking";
import Hero from "./sections/hero/hero";
import Menu from "./sections/menu/menu";
import WhyUs from "./sections/profile/whyUs";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <WhyUs />
    <Menu />
    <Booking />
    </>
  );
}
