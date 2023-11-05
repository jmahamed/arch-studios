import Link from "next/link";

const Hero4 = () => {
  return (
    <div className="hero4">
      <div className="hero-content">
        <h1>
          Trinity Bank <br /> Tower
        </h1>
        <p>
          Trinity Bank challenged us to make a concept for a 84 story building
          located in the middle of a city with a high earthquake frequency. For
          this project we used curves to blend design and stability to meet our
          objectives.
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

export default Hero4;
