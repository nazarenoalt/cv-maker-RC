import React from 'react'
import './Footer.style.js'
import { Wrapper } from './Footer.style.js'

const Footer = () => {
  return (
    <Wrapper>
      <div className="Footer">
        <small>
          Curriculum created in React by <a href="https://www.github.com/nazarenoalt" target="_blank">@nazarenoalt</a>
          <br />
          <a href={`https://www.github.com/nazarenoalt/curriculum-v2`} target="_blank">sourcecode</a>
        </small>
      </div>
    </Wrapper>
  )
}

export default Footer
