import React from "react";

const LeaderCard = ({ name, imageSrc, title }) => {
  return (
    <div className="leader">
      <div className="img-container-leader">
        <img src={imageSrc} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{title}</p>
    </div>
  );
};

export default LeaderCard;
