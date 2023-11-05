import Navbar from "./components/Navbar";
import Head from "next/head";
import Footer from "./components/Footer";
import PortfolioGrid from "./components/PortfolioGrid";

const Portfolio = () => {

return (
  <div className="container">
    <Head>
      <title>PORTFOLIO</title>
    </Head>
    <div className="which-page-portfolio">
      <img height={104} width={1} src="./Rectangleline.png" alt="line" />
      <div className="page-name">PORTFOLIO</div>
    </div>
    <Navbar />
    <PortfolioGrid />
    <Footer />
  </div>
);
};

export default Portfolio;
