import React from 'react'

const Container = ({ variation, className, children }) => {
  let classes = 'col'
  if (variation) classes += `-${variation}`
  if (className) classes += ` ${className}`
  return <div className={classes}>{children}</div>
}

export default Container
