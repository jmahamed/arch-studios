import Navbar from "./components/Navbar";
import Head from "next/head";
import ContactHero from "./components/ContactHero";
import Footer from "./components/Footer";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";

const contact = () => {
  return (
    <div className="container">
      <Head>
        <title>CONTACT</title>
      </Head>
      <div className="which-page-contact">
        <img height={104} width={1} src="./Rectangleline.png" alt="line" />
        <div className="page-name">CONTACT</div>
      </div>
      <Navbar />
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default contact;
