import { useEffect, useState } from "react";
import BeerCardContainer from "./containers/BeerCardContainer/BeerCardContainer";
import './App.scss';
import { FormEvent, ChangeEvent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beer } from "./data/beer-types";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Nav from "./components/Nav/Nav";


function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<{[key: string]: boolean}>({
    abv: false,
    classicRange: false,
    ph: false
  });

  const getBeers = async () => {
    const url = 'http://localhost:3333/v2/beers';
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  }

  useEffect(() => {
    getBeers();
  }, [])

    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
      const cleanedInput = event.currentTarget.value;
      const capitalisedInput = cleanedInput.charAt(0).toUpperCase() + cleanedInput.slice(1).toLowerCase()
      setSearchTerm(capitalisedInput)
    }


    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
      const {id, checked} = event.target;
        setSelectedCategories(prevState => ({...prevState, [id]: checked}));
      }


    const searchBoxFilter = beers.filter((beer) => {
      const searchByName = beer.name.includes(searchTerm)
      const {malt, hops} = beer.ingredients;
  
      const maltIngredients = malt.some((ingredient) => {
        return ingredient.name.includes(searchTerm);
      })
    
      const hopsIngredients = hops.some((ingredient) => {
        return ingredient.name.includes(searchTerm);
      })

      const yeast = beer.ingredients.yeast.includes(searchTerm);

       return searchByName || maltIngredients || hopsIngredients || yeast
    })

    const checkboxFilter = beers.filter((beer) => {
      
      const year = parseInt(beer.first_brewed.split("/")[1]);

      if (selectedCategories.abv && beer.abv >= 6) {
        return true;
      }
      if (selectedCategories.classicRange && year < 2010) {
        return true;
      }
      if (selectedCategories.ph && beer.ph < 4){
        return true;
      }
        return false;
    });

const filteringMethod = 
searchTerm ? 'search' :
Object.values(selectedCategories).some(value => value) ? 'checkbox' :
null


  return (
    <BrowserRouter>
       <>
      <div className="app">
        <Nav searchTerm={searchTerm} handleSearchInput={handleSearchInput} handleCheckbox={handleCheckbox}/>
        

        <Routes>
          <Route 
            path="/react-punk-api/"
            element={<BeerCardContainer beers={searchBoxFilter} checkboxFilter={checkboxFilter} filteringMethod={filteringMethod}/>}
          />

          <Route 
            path="/:beerId"
            element={<BeerInfo beers={beers}/>}
          />
        </Routes>
      </div>
    </>
    </BrowserRouter>
  );
}

export default App;

// PLAN:
// 2. When beer card "Learn More" button is clicked, it reroutes to another component with more info
// 3. On mobile site, should just click the search icon for nav-menu to pop open 
