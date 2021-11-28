import React from 'react'
import { Wrapper } from './Sidebar.style'

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Sidebar
