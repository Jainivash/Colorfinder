import React from 'react'

const ColorBox = ({colorName,colorCode,textColor}) => {
  return (
    <div className='colorBox' style={{background:colorName}}>
        {colorName ? 
        <div>
            <p style={{color:textColor}}>{colorName}</p>
            <small style={{color:textColor}}>{colorCode}</small>
        </div>
        :
        <p>No color selected</p>
        }
    </div>
  )
}

export default ColorBox