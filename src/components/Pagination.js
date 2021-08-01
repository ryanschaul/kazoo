import React from 'react'
import Button from './Button';

// Maybe a render a button component as many times as I have pages. Basic FOR loop passing in the index plus 1?
const Pagination = ({totalPages, setPageNumber}) => {
  const displayButtons = () => {
    let buttonList = [];
    let pageNumber = 1;

    while (pageNumber <= totalPages) {
      buttonList.push(<Button pageNumber={pageNumber} setPageNumber={setPageNumber} />)
      pageNumber += 1;
    }

    return buttonList;
  }

  return (
    displayButtons()
  )
}

export default Pagination
