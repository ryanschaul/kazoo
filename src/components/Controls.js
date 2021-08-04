import React from 'react'

const Controls = ({setSortOrder, setIssuesFilter}) => {
  return (
    <div className='selects-wrapper'>
      <label htmlFor='sort' className='select-label'>
        Select A Sort Order
        <div className='select-wrapper'>
          <select id='sort' defaultValue='Select A Sort Order' onChange={(event) => {setSortOrder(event.target.value)}}>
            <option disabled>Select A Sort Order</option>
            <option>Title</option>
            <option>Date Created</option>
            <option>Last Updated</option>
            <option>Comment Count</option>
          </select>
        </div>
      </label>

      <label htmlFor='sort' className='select-label'>
        Filter By Issues
        <div className='select-wrapper'>
          <select onChange={(event) => {setIssuesFilter(event.target.value)}}>
            <option>All Issues</option>
            <option>Issues With Labels</option>
          </select>
        </div>
      </label>
    </div>
  )
}

export default Controls
