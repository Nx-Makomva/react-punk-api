import { Beer } from "../../data/beer-types";
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

type BeerInfoProps = {
  beers: Beer[];
};

const BeerInfo = ({beers}: BeerInfoProps) => {
  const { beerId } = useParams();


  const matchedBeer = beers.find((beer) => beer.id === Number(beerId));
  if(!matchedBeer){
    return <p>Sorry, we couldn't find that beer. Return to the <Link to={`/react-punk-api/`}>homepage</Link></p>
  }

  const {malt, hops} = matchedBeer.ingredients;
  
  const maltIngredients = malt.map((ingredient) => {
    return `${ingredient.name}: ${ingredient.amount.value} ${ingredient.amount.unit}`;
  })

  const hopsIngredients = hops.map((ingredient) => {
    return `${ingredient.name}: ${ingredient.amount.value} ${ingredient.amount.unit}`;
  })



console.log(maltIngredients);

console.log(hopsIngredients);

  // const lastSentenceIndex = matchedBeer.description.indexOf('.', 350);
  // const shortSentence = matchedBeer.description.substring(0, lastSentenceIndex);

  return (
    <article className="beer-info">
      <div className="beer-info__banner">
        <img
          src={matchedBeer?.image_url}
          alt={`an image of the named: ${matchedBeer?.name}`}
        />
      </div>
      <div className="beer-info__content">
        <h2>{matchedBeer?.name}</h2>
        <p><span><em>{`"${matchedBeer?.tagline}"`}</em></span></p>
        <p>{matchedBeer.description}</p>
        <h2>Ingredients</h2>
        <ul>
        <li className="beer-info__list">Malt:
          <ul>
          {maltIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
          </ul>
          </li>
          <br />
          <li className="beer-info__list">Hops: 
            <ul>
            {hopsIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
            </ul>
            </li>
            <br />

          <li className="beer-info__list">Yeast: 
            <ul>
            <li>{matchedBeer.ingredients.yeast}</li>
            </ul>
            </li>
        </ul>

        <h2 className="beer-info__heading">Facts</h2>
        <ul className="beer-info__facts">
          <li>I was first brewed : {matchedBeer.first_brewed} </li>
          <li>My Alcohol by Volume is: {`${matchedBeer.abv}%`}</li>
          <li>My pH is : {matchedBeer.ph} </li>
          <li>I'm great with :  
            <ul>
              {matchedBeer.food_pairing.map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ul>
          </li>

          <li>Brewers Tip : {matchedBeer.brewers_tips} </li>
        </ul>

      </div>
    </article>
  );
};

export default BeerInfo;
