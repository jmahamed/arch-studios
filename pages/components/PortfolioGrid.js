import data from "./portfolio-data.json";

const PortfolioGrid = () => {
  return (
    <div className="portfolio-grid">
      {data.map((project) => {
        return (
          <div key={project.id} className= {`feature ${project.img}`}>
            <div className="feature-content">
              <h4>{project.title}</h4>
              <p className="feature-txt">{project.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
