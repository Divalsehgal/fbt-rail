import React from 'react'
import "./styles.css"
type Props = {}

function Button({title}: Props) {
  return (
    <div className='button-container'>{title}</div>
  )
}

export default Button