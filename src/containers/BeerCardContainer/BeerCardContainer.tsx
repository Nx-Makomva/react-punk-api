import "./BeerCardContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";
import { Beer } from "../../data/beer-types";
import { Link } from "react-router-dom";

type BeerContainerProps = {
  beers: Beer[];
  checkboxFilter: Beer[];
  filteringMethod: "search" | "checkbox" | null;
};

const BeerCardContainer = ({
  beers,
  checkboxFilter,
  filteringMethod,
}: BeerContainerProps) => {
  const filteredBeers =
    filteringMethod === "search" || filteringMethod === null
      ? beers
      : checkboxFilter;

        console.log(beers);
        
      console.log(filteringMethod);
      
      console.log(checkboxFilter);
      

  return (
    <div className="beer-card__container">
      {filteredBeers.map((beer) => (
        <div  key={beer.id}>
        <Link to={`/${beer.id}`}>
        <BeerCard
          key={beer.id}
          image={beer.image_url}
          name={beer.name}
          firstBrewed={beer.first_brewed}
        />
        </Link>
        </div>
      ))}
    </div>
  );
};

export default BeerCardContainer;
