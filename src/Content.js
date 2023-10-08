import React from 'react'
import ColorBox from './content/ColorBox'
import ColorName from './content/ColorName'
import TextSwap from './content/TextSwap'
import { useState } from 'react'


const Content = () => {
    // const [newColor, setNewColor] = useState('')

    const [colorName, setColorName] = useState('')

    const [colorCode, setColorCode] = useState('')

    const [textColor, setTextColor] = useState('black')

    const handleClick = () => {
        const newColor = textColor === 'black' ? 'white' : 'black'
        setTextColor(newColor)
    }
  return (
    <main>
        <ColorBox
            colorName={colorName}
            colorCode={colorCode}
            textColor={textColor}
        />
        <ColorName
            colorName={colorName}
            setColorName={setColorName}
            setColorCode={setColorCode}
        />
        <TextSwap
            handleClick={handleClick}
        />
    </main>
  )
}

export default Content