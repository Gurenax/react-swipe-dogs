import React from 'react'

/*
*   Container component
*   children - any component under Container component
*   variation - type of container e.g. fluid
*   className - any other class name for container
*/
const Container = ({ children, variation, className }) => {
  let classes = 'container'
  if (!!variation) classes += `-${variation}`
  if (!!className) classes += ` ${className}`
  return (
    <div className={ classes }>
      {children}
    </div>
  )
}

export default Container