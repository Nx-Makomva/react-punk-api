import { useEffect, useState } from "react";
import BeerCardContainer from "./containers/BeerCardContainer/BeerCardContainer";
import './App.scss';
import { FormEvent, ChangeEvent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beer } from "./data/beer-types";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Nav from "./components/Nav/Nav";
import Pagination from "./components/Pagination/Pagination";


function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchBoxFilter, setSearchBoxFilter] = useState<Beer[]>([]);
  const [checkboxFilter, setCheckboxFilter] = useState<Beer[]>([]);  
  const [showNextPage, setshowNextPage] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<{[key: string]: boolean}>({
    abv: false,
    classicRange: false,
    ph: false
  });


  const getBeers = async () => {
    const baseUrl = 'http://localhost:3333/v2/beers';
    const perPage = 80;
    const totalPages = 5;
    const beers = [];

    for (let page = 1; page <= totalPages; page++) {
      const url = `${baseUrl}?page=${page}&per_page=${perPage}`;
      const res = await fetch(url);
      const data = await res.json();
      beers.push(...data)
    }
    setBeers(beers);


  }

  console.log(beers);

  useEffect(() => {
    getBeers();
    
  }, [])

  const handlePageChange = (page: number) => {
    setshowNextPage(page)
  }

  useEffect(() => {
    
  }, [showNextPage])

  // Need to slice the array and only show 25 items at a time
  // Need to have a counter to manage the starting index of the sliced array
  // The counter is managed by buttons clicking up or down 
  // state needs to update to re-render the page and show the beers

  // function that handles increment and decrement of 'page=n' in url. when this is clicked, url page=n +1 or -1
  // i need a state to manage the page we're on. 
  // what will update the state? a counter that goes up by 1 each time a button is pressed
  // show next page should determine when slice moves on in the array
  // use splice to hold an array of arrays and move through the indexes

  // 1. button is pressed - counter increased by 1 or decreased by 1 - component to manage pages
  // 2. counter updates the state of shownextpage and that value will increase by 1
  // 3. value of shownextpage will dictate the slice moving to the next section of the beers array.



  // const startIndex = 0;

  // useEffect(() => {
  // const slicedbeers = beers.slice(startIndex, 26);
  // setBeers(slicedbeers)
  // console.log(beers);
  // },[])

  
  


  useEffect(() => {
    const search = beers.filter((beer) => {
      const searchByName = beer.name.includes(searchTerm)
      const {malt, hops, yeast} = beer.ingredients;
  
      const maltIngredients = malt.some((ingredient) => {
        return ingredient.name.includes(searchTerm);
      })
    
      const hopsIngredients = hops.some((ingredient) => {
        return ingredient.name.includes(searchTerm);
      })

      const yeastIncluded = yeast && beer.ingredients.yeast.includes(searchTerm);

       return searchByName || maltIngredients || hopsIngredients || yeastIncluded
    })

    setSearchBoxFilter(search)

  }, [searchTerm])




  useEffect(() => {
    const checkbox = beers.filter((beer) => {
      
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

    setCheckboxFilter(checkbox);

  }, [selectedCategories])

    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
      const cleanedInput = event.currentTarget.value;
      const capitalisedInput = cleanedInput.charAt(0).toUpperCase() + cleanedInput.slice(1).toLowerCase()
      setSearchTerm(capitalisedInput)
    }


    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
      const {id, checked} = event.target;
        setSelectedCategories(prevState => ({...prevState, [id]: checked}));
      }
      
      // event handler takes in clicks from pagination and grabs the page. 
      // once onpagechange has the page number it needs to 
      // use that number to move through the array index and update the state

const filteringMethod = 
searchTerm ? 'search' :
Object.values(selectedCategories).some(value => value) ? 'checkbox' :
null


  return (
    <BrowserRouter>
       <>
      <div className="app">
        <Nav searchTerm={searchTerm} handleSearchInput={handleSearchInput} handleCheckbox={handleCheckbox}/>
        <Pagination OnpageChange={handlePageChange} />

        <Routes>
          <Route 
            path="/react-punk-api/"
            element={<BeerCardContainer beers={searchBoxFilter.length > 0 ? searchBoxFilter : beers} checkboxFilter={checkboxFilter} filteringMethod={filteringMethod}/>}
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
// 1. Add pagination?
// 1b. add testing
// 2. adjust styling so that button elements are all in same position for each card
// 3. add some kind of feature
