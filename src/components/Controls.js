import React from 'react'

const Controls = ({setSortOrder, setIssuesFilter}) => {
  return (
    <div>
      <select onChange={(event) => {setSortOrder(event.target.value)}}>
        <option>Select A Sort Order</option>
        <option>Title</option>
        <option>Date Created</option>
        <option>Last Updated</option>
        <option>Comment Count</option>
      </select>
      <select onChange={(event) => {setIssuesFilter(event.target.value)}}>
        <option>Show All Issues</option>
        <option>Show Only Issues With Labels</option>
      </select>
    </div>
  )
}

export default Controls
