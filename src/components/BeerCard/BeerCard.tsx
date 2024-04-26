import "./BeerCard.scss";

type BeerCardProps = {
  name: string;
  image: string;
  firstBrewed: string;
  foodPairing: string[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isHovered: boolean;
};

const BeerCard = ({
  name,
  image,
  firstBrewed,
  foodPairing,
  onMouseEnter,
  onMouseLeave,
  isHovered
}: BeerCardProps) => {
  return (
    <div
      className="beer__card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered ? (
        <div>
          <div className="beer__image-background-hover">
            <div className="beer__image-hover">
              <img src={image} alt="" />
            </div>
          </div>
          <h2 className="beer-hover__title">Imagine us and some...</h2>
          <ul className="beer-card__food-pairing">
            {foodPairing.map((pairing, index) => (
              <li key={index}>{pairing}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="beer__info">
          <div className="beer__image-background">
            <div className="beer__image">
              <img src={image} alt="" />
            </div>
          </div>
          <h2 className="beer__header">{name}</h2>
          <p className="beer__year">{firstBrewed}</p>
          <button className="beer__button">Learn More</button>
        </div>
      )}
    </div>
  );
};
export default BeerCard;
