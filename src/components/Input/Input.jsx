import React from 'react'



 const Input= ({id, placeholder, value, onChange, readable, type, size}) => {
  return (
    <>
        <input type={type} name={id} id={id} size={size} value={value} onChange={onChange} required placeholder={placeholder} readOnly={readable} />
    </>
  )
}

export default Input