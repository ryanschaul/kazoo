import React from 'react'
import { Link } from "react-router-dom";

const Button = ({ pageNumber, setPageNumber, currentPageNumber }) => {
  return (
    <Link to={{ pathname: "/", search: `?page=${pageNumber}` }}>
      <button
        onClick={() => setPageNumber(pageNumber)}
        className={`pagination-button ${currentPageNumber === pageNumber ? 'button-active' : ''}`}>{pageNumber}
      </button>
    </Link>
  )
}

export default Button
