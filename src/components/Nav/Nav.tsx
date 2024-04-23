import './Nav.scss';
import NavMenu from '../NavMenu/NavMenu';
import { FormEvent, ChangeEvent, useState } from 'react';
import menuIcon from '../../assets/images/menu-icon.png';
import blackCross from '../../assets/images/black-cross.png'

type NavProps = {
  searchTerm: string;
  handleSearchInput: (event: FormEvent<HTMLInputElement>) => void;
  handleCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Nav = ({searchTerm, handleSearchInput, handleCheckbox}: NavProps) => {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  } 

  return (
    <div className='nav'>
      {
        showNavMenu ? (
          <>
           <img className='black-cross' src={blackCross} alt="black cross to close menu" onClick={toggleNavMenu}/>
          <NavMenu searchTerm={searchTerm} handleSearchInput={handleSearchInput} handleCheckbox={handleCheckbox} />
          </>
        ) : (
          <img className='menu-icon' src={menuIcon} alt="menu icon" onClick={toggleNavMenu} />
        )
      }
    </div>
  )
}

export default Nav
