import Link from "next/link";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-heading">
        <h3>Featured</h3>
        <Link className="portfolio-link" href={"/portfolio"}>
          <button>
            See All
            <img src="./arrow-right-line.png" alt="arrow" />
          </button>
        </Link>
      </div>
      <div className="features">
        <div className="feature one">
          <div className="feature-number">1</div>
          <div className="feature-content">
            <h4>Project Del Sol</h4>
            <Link className="portfolio-link feature-txt" href={"/portfolio"}>
              View All Projects
            </Link>
          </div>
        </div>
        <div className="feature two">
        <div className="feature-number">2</div>
        <div className="feature-content">
            <h4>228B Tower</h4>
            <Link className="portfolio-link feature-txt" href={"/portfolio"}>
              View All Projects
            </Link>
          </div>
        </div>
        <div className="feature three">
        <div className="feature-number">3</div>
        <div className="feature-content">
            <h4>Le Prototype</h4>
            <Link className="portfolio-link feature-txt" href={"/portfolio"}>
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
