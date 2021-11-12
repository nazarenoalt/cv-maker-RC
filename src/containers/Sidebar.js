import React from 'react'
import '../styles/Sidebar.css'

const Sidebar = ({ children }) => {
  return (
    <div className="Sidebar">
      {children}
    </div>
  )
}

export default Sidebar
