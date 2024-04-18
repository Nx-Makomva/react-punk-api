
import { FormEventHandler } from 'react';
import './SearchBox.scss'

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  onInput: FormEventHandler<HTMLInputElement>;
}

const SearchBox = ({label, searchTerm, onInput}: SearchBoxProps) => {
  return (
    <div className='search-box'>
      <input type="text"
      id={label}
      name={label} 
      value={searchTerm} 
      placeholder={label}
      onInput={onInput}
      />
    </div>
  )
}

export default SearchBox
