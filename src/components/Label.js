import React from 'react'

const Label = ({label}) => {
  return (
    <div className='label'>
      <a href={label.url}>{label.name}</a>
    </div>
  )
}

export default Label
