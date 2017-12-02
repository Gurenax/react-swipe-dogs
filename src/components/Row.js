import React from 'react'

const Row = ({ className, children }) => {
  let classes = 'row'
  if (className) classes += ` ${className}`
  return <div className={classes}>{children}</div>
}

export default Row
