import React from 'react'

const TextSwap = ({handleClick}) => {
  return (
    <button
        type='button'
        className='swapbtn'
        onClick={handleClick}
    >
        Swap Color
    </button>
  )
}

export default TextSwap