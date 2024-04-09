import Image from "next/image";
import About from "./_components/About";
import Team from "./_components/Team";
import WhatWeDo from "./_components/WhatWeDo";
import Slider from "./_components/Slider/Slider";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <About />
      <Team />
      <WhatWeDo />
      <Slider  />
      <Footer />
    </>
  );
}
