import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
       &copy; {year} All rights recieved
    </footer>
  )
}

export default Footer