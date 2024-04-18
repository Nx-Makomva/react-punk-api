import { useState } from "react";
import BeerCardContainer from "./containers/BeerCardContainer/BeerCardContainer";
import './App.scss';
import beers from "./data/beer";
import NavMenu from "./components/NavMenu/NavMenu";


function App() {

  return (
    <>
      <div className="app">
        <NavMenu />
        <BeerCardContainer beers={beers}/>
      </div>
    </>
  );
}

export default App;
