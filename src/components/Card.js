import React from 'react'

const Card = ({ className, image, text, onTouchStart, onTouchMove }) => {
  let classes = 'card'
  if (className) classes += ` ${className}`
  return (
    <div className={ classes } onTouchStart={ onTouchStart } onTouchMove={ onTouchMove } >
      <img className="card-img-top" src={image} alt="" />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}

export default Card
