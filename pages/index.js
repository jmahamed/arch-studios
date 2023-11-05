import { useState } from "react";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Slider from "./components/Slider";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import SmallTeam from "./components/SmallTeam";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

export default function Home() {

  const [activeHero, setActiveHero] = useState(1)

  const handelSlideClick = (index) => {
    setActiveHero(index)
  }

  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>
      <div className="which-page-home">
        <img height={104} width={1} src="./Rectangleline.png" alt="line" />
        <div className="page-name">HOME</div>
      </div>
      <Navbar />
      {activeHero === 1 && <Hero />}
      {activeHero === 2 && <Hero2 />}
      {activeHero === 3 && <Hero3 />}
      {activeHero === 4 && <Hero4 />}
      <Slider onSlideClick={handelSlideClick} activeSlide={activeHero}/>
      <Welcome />
      <SmallTeam />
      <Featured />
      <Footer />
    </div>
  );
}
