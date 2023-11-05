import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <img src="/archfooter.png" alt="footer-logo" />
      </div>
      <ul className="footer-items">
        <li>
          <Link className="link" href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="link" href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Link className="portfolio-link" href={"/portfolio"}>
          <button>
            See Our Portfolio
            <img src="./arrow-right-line.png" alt="arrow" />
          </button>
        </Link>
    </footer>
  );
};

export default Footer;
