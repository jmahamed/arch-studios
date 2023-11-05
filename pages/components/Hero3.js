import Link from "next/link";

const Hero2 = () => {
  return (
    <div className="hero3">
      <div className="hero-content">
        <h1>
          Federal II
          <br /> Tower
        </h1>
        <p>
          A sequel theme project for a tower originally built in the 1800s. We
          achieved this with a striking look of brutal minimalism with modern
          touches.
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

export default Hero2;
