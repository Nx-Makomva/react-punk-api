import { Link } from "react-router-dom";
import beer from '../src/assets/images/beer.jpeg';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">
        <br />
      </h1>
      <div className="home__beer">
        <img src={beer} alt="Big Beer Image" />
      </div>
      <Link to="/react-punk-api/beers">
      <button className="home__button">Meet beers</button>
      </Link>
      
    </div>
  )
}

export default Home
