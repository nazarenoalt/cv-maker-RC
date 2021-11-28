import React from 'react'
import { Wrapper } from './Header.style'

const Header = ({ children }) => {
  return (
    <Wrapper>
      <div className="Header">
        {children}
      </div>
    </Wrapper>
  )
}

export default Header
