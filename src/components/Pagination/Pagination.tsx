import { useEffect, useState } from 'react';
import './Pagination.scss';

type PaginationProps = {
  OnpageChange: (page: number) => void;
}

const Pagination = ({OnpageChange}: PaginationProps) => {
  const [pageNumber, setpageNumber] = useState<number>(1);

  const handleIncrement = () => {
    pageNumber < 5 ? setpageNumber(pageNumber + 1) : console.log('oops');
    ;
  };

  const handleDecrement = () => {
    pageNumber > 1 ? setpageNumber(pageNumber - 1) : setpageNumber(1);
  };

useEffect(()=> {
  OnpageChange(pageNumber);
}, [pageNumber])

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>{pageNumber}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Pagination
