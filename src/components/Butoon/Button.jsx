import React from 'react'
import styles from './Button.module.css'



const Button = ({name, onClick, disabled}) => {
  return (
    <>
      <button type="submit" onClick={onClick} disabled={disabled}>{name}</button>
    </>
  )
}

export default  Button