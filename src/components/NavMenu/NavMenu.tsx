import "./NavMenu.scss";
import SearchBox from "../SearchBox/SearchBox";
import { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/images/home-icon.png";

type NavMenuProps = {
  handleSearchInput: (event: FormEvent<HTMLInputElement>) => void;
  handleCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

const NavMenu = ({
  handleSearchInput,
  searchTerm,
  handleCheckbox,
}: NavMenuProps) => {
  return (
    <div className="nav__menu">
      <div className="nav__search-box">
        <SearchBox
          label="Search..."
          searchTerm={searchTerm}
          onInput={handleSearchInput}
        />
      </div>
      <div>
        
        <Link className="nav-menu__link" to={`/react-punk-api/`}>
          <div className="nav-menu__home">
          <img
              className="nav-menu__icon"
              src={homeIcon}
              alt="home navigation icon"
            />
            <h2 className="nav-menu__heading">
            Home
          </h2>
          </div>
        </Link>

      </div>
      <div className="nav__checkboxes">
        <div className="nav__checkbox-option">
          <input
            type="checkbox"
            id="abv"
            value="abv"
            onChange={handleCheckbox}
          />
          <label className="menu-item" htmlFor="abv">
            High ABV ({">"} 6.0%)
          </label>
        </div>

        <div className="nav__checkbox-option">
          <input
            type="checkbox"
            id="classicRange"
            value="classicRange"
            onChange={handleCheckbox}
          />
          <label htmlFor="classicRange">Classic Range</label>
        </div>

        <div className="nav__checkbox-option">
          <input type="checkbox" id="ph" value="ph" onChange={handleCheckbox} />
          <label htmlFor="ph">Acidic (ph {"<"} 4)</label>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
