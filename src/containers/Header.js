import React from 'react'
import '../styles/Header.css'

const Header = ({ children }) => {
  return (
    <div className="Header">
      {children}
    </div>
  )
}

export default Header
