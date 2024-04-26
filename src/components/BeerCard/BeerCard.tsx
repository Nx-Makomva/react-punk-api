import "./BeerCard.scss";

type BeerCardProps = {
  name: string;
  image: string;
  firstBrewed: string;
};

const BeerCard = ({ name, image, firstBrewed }: BeerCardProps) => {
  return (
    <div className="beer__card">
      <div className="beer__image-background">
        <div className="beer__image">
          <img src={image} alt="" />
        </div>
      </div>
      <h2 className="beer__header">{name}</h2>
      <p className="beer__year">{firstBrewed}</p>
      <button className="beer__button">Learn More</button>
    </div>
  );
};

export default BeerCard;