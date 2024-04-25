import { useEffect, useState } from 'react';
import { Beer } from "../../data/beer-types";
import './Pagination.scss';

type PaginationProps = {
  OnpageChange: (page: number) => void;
  paginatedBeers: Beer[][]
}

const Pagination = ({OnpageChange, paginatedBeers}: PaginationProps) => {
  const [pageNumber, setpageNumber] = useState<number>(1);

  const handleIncrement = () => {
    pageNumber < paginatedBeers.length ? setpageNumber(pageNumber + 1) : setpageNumber(paginatedBeers.length);
  };

  const handleDecrement = () => {
    pageNumber > 1 ? setpageNumber(pageNumber - 1) : setpageNumber(1);
  };

useEffect(()=> {
  OnpageChange(pageNumber);
}, [pageNumber])

  return (
    <div className='pagination'>
      <div className='pagination--arrow' onClick={handleDecrement}>{'<'}</div>
      <p className='pagination--page'>{pageNumber}</p>
      <div className='pagination--arrow' onClick={handleIncrement}>{'>'}</div>
    </div>
  )
}

export default Pagination
