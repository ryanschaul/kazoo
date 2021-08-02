import React from 'react'

const Button = ({pageNumber, setPageNumber, currentPageNumber}) => {
  return (
    <button 
      onClick={() => setPageNumber(pageNumber)}
      className={`pagination-button ${currentPageNumber === pageNumber ? 'button-active' : ''}`}>{pageNumber}
    </button>
  )
}

export default Button
