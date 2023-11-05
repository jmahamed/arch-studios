import Link from "next/link";

const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="hero-content">
        <h1>
          Seraph <br /> Station
        </h1>
        <p>
          The Seraph Station project challenged us to design a unique station
          that would transport people through time. The result is a fresh and
          futuristic model inspired by space stations.
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
