import { useEffect, useState } from "react";
import { Beer } from "../../data/beer-types";
import "./Pagination.scss";
import leftArrow from "../../assets/images/arrow-left.png";
import rightArrow from "../../assets/images/arrow-right.png";

type PaginationProps = {
  OnpageChange: (page: number) => void;
  paginatedBeers: Beer[][];
};

const Pagination = ({ OnpageChange, paginatedBeers }: PaginationProps) => {
  const [pageNumber, setpageNumber] = useState<number>(1);

  const handleIncrement = () => {
    pageNumber < paginatedBeers.length
      ? setpageNumber(pageNumber + 1)
      : setpageNumber(paginatedBeers.length);
  };

  const handleDecrement = () => {
    pageNumber > 1 ? setpageNumber(pageNumber - 1) : setpageNumber(1);
  };

  useEffect(() => {
    OnpageChange(pageNumber);
  }, [pageNumber]);

  return (
    <div className="pagination">
      <img
        src={leftArrow}
        alt="left navigation arrow"
        className="pagination--arrow"
        onClick={handleDecrement}
      />
      <p className="pagination--page">{pageNumber}</p>
      <img
        src={rightArrow}
        alt="left navigation arrow"
        className="pagination--arrow"
        onClick={handleIncrement}
      />
    </div>
  );
};

export default Pagination;
