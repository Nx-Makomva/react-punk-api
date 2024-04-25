import "./BeerCardContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";
import { Beer } from "../../data/beer-types";
import { Link } from "react-router-dom";
import blackCross from '../../assets/images/black-cross.png'

type BeerContainerProps = {
  beers: Beer[];
  checkboxFilter: Beer[];
  filteringMethod: "search" | "checkbox" | null;
  pageNumber: number;
};

const BeerCardContainer = ({
  beers,
  checkboxFilter,
  filteringMethod,
  pageNumber,
}: BeerContainerProps) => {
  const indexNumber = pageNumber - 1;
  const filteredBeers =
    filteringMethod === "search" || filteringMethod === null
      ? beers
      : checkboxFilter;

  const paginatedBeers: Beer[][] = [[]];
  let innerArrayIndex = 0;

  filteredBeers.forEach((beer) => {
    if (paginatedBeers[innerArrayIndex].length >= 25) {
      paginatedBeers.push([]);
      innerArrayIndex++;
    }

    paginatedBeers[innerArrayIndex].push(beer);
  });
  
  console.log(paginatedBeers);
  

  return (
    <div className="beer-card__container">
      {paginatedBeers[indexNumber] &&
        paginatedBeers[indexNumber].map((beer) => (
          <div key={beer.id}>
            <Link to={`/${beer.id}`}>
              <BeerCard
                key={beer.id}
                image={beer.image_url ? beer.image_url : `Sorry, couldn't find that beer image`}

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
