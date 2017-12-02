import React from 'react'

/*
*   Row component
*   children - components inside the Row component
*   className - optional classes
*/
const Row = ({ children, className }) => {
  let classes = 'row'
  if (!!className) classes += ` ${className}`
  return (
    <div className={ classes }>
      {children}
    </div>
  )
}

export default Row