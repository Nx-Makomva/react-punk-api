import './BeerCardContainer.scss';
import BeerCard from '../../components/BeerCard/BeerCard';
import { Beer } from '../../data/beer-types';

type BeerContainerProps = {
  beers: Beer[]
}

const BeerCardContainer = ({beers}: BeerContainerProps) => {
   

  return (
    <div className='beer-card__container'>
      {
        beers.map((beer) => (
          <BeerCard 
            key={beer.id}
            image={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            firstBrewed={beer.first_brewed}
            description={beer.description}
          />
        ))
      }
    </div>
  )
}

export default BeerCardContainer
