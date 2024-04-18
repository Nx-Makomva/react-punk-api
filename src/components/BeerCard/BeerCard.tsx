import React from "react";
import "./BeerCard.scss";

type BeerCardProps = {
  name: string;
  image: string;
  tagline: string;
  description: string;
  firstBrewed: string;
};

const BeerCard = ({
  name,
  image,
  tagline,
  description,
  firstBrewed,
}: BeerCardProps) => {
  
  return (
    <div className="beer__card">
      <div className='beer__image-background'>
        
        <div className="beer__image">
          <img src={image} alt="" />
        </div>
        {tagline}
      </div>

      <h2>{name}</h2>
      {/* <p>{tagline}</p> */}
      <p>{firstBrewed}</p>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default BeerCard;

// key={beers.id}
// image={beers.image}
// name={beers.name}
// tagline={beers.tagline}
// description={beers.description}
// brewed={beers.first_brewed}

// should be able to click 'more info' button
// and then state of the card changes to see extra info about the beers
