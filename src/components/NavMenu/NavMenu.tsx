import "./NavMenu.scss";
// import SearchBox from "../SearchBox/SearchBox";

const NavMenu = () => {


  return (
    <div className="nav__menu">
      <div className="nav__search-box">
        {/* <SearchBox 
        // label={}
        // searchTerm={}
        // onInput={} */}
        {/* /> */}
      </div>
      <div className="nav__checkboxes">
        <div className="nav__checkbox-option">
          <label htmlFor="abv">High ABV ((more than sign) 6.0%)</label>
          <input type="checkbox" id="abv" />
        </div>

        <div className="nav__checkbox-option">
          <label htmlFor="classic-range">Classic Range</label>
          <input type="checkbox" id="classic-range" />
        </div>

        <div className="nav__checkbox-option">
          <label htmlFor="ph">Acidic (ph (less than sign) 4)</label>
          <input type="checkbox" id="ph" />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
