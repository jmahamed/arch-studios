import Link from "next/link";

const SmallTeam = () => {
  return (
    <div className="small-team">
      <div className="small-team-content">
        <h3>
          Small Team, <br /> big ideas
        </h3>
        <Link className="about-link" href="/about">
          <button>
            About Us
            <img src="./arrow-right-line.png" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SmallTeam;
