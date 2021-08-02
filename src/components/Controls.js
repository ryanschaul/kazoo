import React from 'react'

const Controls = ({setSortOrder, setIssuesFilter}) => {
  return (
    <div className='selects-wrapper'>
      <div className='select-wrapper'>
        <select onChange={(event) => {setSortOrder(event.target.value)}}>
          <option selected disabled>Select A Sort Order</option>
          <option>Title</option>
          <option>Date Created</option>
          <option>Last Updated</option>
          <option>Comment Count</option>
        </select>
      </div>
      <div className='select-wrapper'>
        <select onChange={(event) => {setIssuesFilter(event.target.value)}}>
          <option>All Issues</option>
          <option>Issues With Labels</option>
        </select>
      </div>
    </div>
  )
}

export default Controls
