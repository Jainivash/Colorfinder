import React from 'react'
import colorNames from 'colornames'
const ColorName = ({colorName,setColorName,setColorCode}) => {
  return (
    <input 
        type="text" 
        className='colorNameBox'
        required 
        autoFocus 
        value={colorName}
        onChange={(e) => {setColorName(e.target.value);
            setColorCode(colorNames(e.target.value))}}
    />
  )
}

export default ColorName