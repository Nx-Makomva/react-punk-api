import "./NavMenu.scss";
import SearchBox from "../SearchBox/SearchBox";
import { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

type NavMenuProps = {
  handleSearchInput: (event: FormEvent<HTMLInputElement>) => void;
  handleCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

const NavMenu = ({handleSearchInput, searchTerm, handleCheckbox}: NavMenuProps) => {


  return (
    <div className="nav__menu">
      <div className="nav__search-box">
        <SearchBox 
          label='Search...'
          searchTerm={searchTerm}
          onInput={handleSearchInput}
        />
      </div>
      <div>
          <Link to={`/react-punk-api/`}>
            <h2 className="nav-menu__heading">Home</h2>
          </Link>
          
        </div>
      <div className="nav__checkboxes">
        <div className="nav__checkbox-option">
          <label className="menu-item" htmlFor="abv">High ABV ({'>'} 6.0%)</label>
          <input 
            type="checkbox" 
            id="abv" 
            value="abv"
            onChange={handleCheckbox}
            />
            
        </div>

        <div className="nav__checkbox-option">
          <label htmlFor="classicRange">Classic Range</label>
          <input 
            type="checkbox" 
            id="classicRange" 
            value="classicRange"
            onChange={handleCheckbox}
            />
        </div>

        <div className="nav__checkbox-option">
          <label htmlFor="ph">Acidic (ph {'<'} 4)</label>
          <input 
          type="checkbox" 
          id="ph" 
          value="ph"
          onChange={handleCheckbox}
          />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
