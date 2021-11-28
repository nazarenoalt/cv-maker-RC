import React from 'react'
import { Wrapper } from './Body.style'

const Body = ({ children }) => {
  return (
    <Wrapper>
      <div className="Body">
        {children}
      </div>
    </Wrapper>
  )
}

export default Body
