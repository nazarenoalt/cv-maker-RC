import React from 'react'
import { Wrapper } from './Header.style'

const Header = ({ children }) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Header
