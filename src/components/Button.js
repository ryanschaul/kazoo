import React from 'react'

const Button = ({pageNumber, setPageNumber}) => {
  return (
    <button onClick={() => setPageNumber(pageNumber)}>{pageNumber}</button>
  )
}

export default Button
