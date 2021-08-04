import React from 'react'
import Button from './Button';

const Pagination = ({totalPages, setPageNumber, currentPageNumber}) => {
  const displayButtons = () => {
    let buttonList = [];
    let pageNumber = 1;

    while (pageNumber <= totalPages) {
      buttonList.push(<Button key={pageNumber} pageNumber={pageNumber} setPageNumber={setPageNumber} currentPageNumber={currentPageNumber}/>);

      pageNumber += 1;
    }

    return buttonList;
  }

  return (
    <div className='pagination-wrapper'>
      {displayButtons()}
    </div>
  )
}

export default Pagination
