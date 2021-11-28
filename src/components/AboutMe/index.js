import React from 'react'
import { Wrapper } from './AboutMe.style'

const AboutMe = ({ text }) => {
  return (
    <Wrapper>
      <div className="AboutMe">
        <h2>Sobre mí</h2>
        <p>{text}</p>
      </div>
    </Wrapper>
   
  )
}

export default AboutMe
