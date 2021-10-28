import React, {useState} from "react";
import PaginatorStyle from './Paginator.module.css'

export const Paginator = (props) => {

  let [currentPage, setCurrentPage] = useState(props.currentPage);
  let minBorderPages = currentPage - 2;
  let maxBorderPages = currentPage + 2;


  let maxPages = Math.ceil(props.totalCount / props.pageSize);
  let numberPages = [];


  if (currentPage <= 2) {
    minBorderPages = 1;
    maxBorderPages = 5;
  }

  for (minBorderPages; minBorderPages <= maxBorderPages; minBorderPages++) {
    if (minBorderPages <= maxPages) numberPages.push(minBorderPages);
  }

  const setFirstPage = () => {
    setCurrentPage(1);
  }

  const setEndPage = () => {
    setCurrentPage(maxPages);
  }

  return (
      <div className={PaginatorStyle.wrapper}>
        <div className={PaginatorStyle.wrapperElements}>
          <div>
            <button onClick={setFirstPage}>
              Start
            </button>
          </div>
          {numberPages.map(u => <span
              className={`${PaginatorStyle.commonPages} ${props.currentPage === u && PaginatorStyle.currentPage}`}
              onClick={() => {
                props.setCurrentPage(u)
              }}>{u}</span>)}
          <div>
            <button onClick={setEndPage}>
              End
            </button>
          </div>
        </div>
      </div>
  )
}



