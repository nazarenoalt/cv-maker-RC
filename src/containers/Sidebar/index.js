import React from 'react'
import { Wrapper } from './Sidebar.style'

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      <div className="Sidebar">
        {children}
      </div>
    </Wrapper>
  )
}

export default Sidebar
