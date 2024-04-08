import Image from "next/image";
import About from "./_components/About";
import Team from "./_components/Team";
import WhatWeDo from "./_components/WhatWeDo";
import Slider from "./_components/Slider";

export default function Home() {
  return (
    <>
      <About />
      <Team />
      <WhatWeDo />
      <Slider />
    </>
  );
}
