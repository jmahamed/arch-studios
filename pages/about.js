import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutHero from "./components/AboutHero";
import Heritage from "./components/Heritage";
import TheLeaders from "./components/TheLeaders";

const   about = () => {
  return (
    <div className="container">
      <Head>
        <title>ABOUT</title>
      </Head>
      <div className="which-page-about">
        <img height={104} width={1} src="./Rectangleline.png" alt="line" />
        <div className="page-name">ABOUT US</div>
      </div>
      <Navbar />
      <AboutHero />
      <Heritage />
      <TheLeaders />
      <Footer />
    </div>
  );
};

export default about;
