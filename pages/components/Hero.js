import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Project <br /> Paramour
        </h1>
        <p>
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>

        <Link className="portfolio-link" href={"/portfolio"}>
          <button>
            See Our Portfolio
            <img src="./arrow-right-line.png" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
