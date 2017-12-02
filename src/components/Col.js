import React from 'react'

const Col = ({ className, children }) => {
  let classes = 'col'
  if (className) classes += ` ${className}`
  return <div className={classes}>{children}</div>
}

export default Col
