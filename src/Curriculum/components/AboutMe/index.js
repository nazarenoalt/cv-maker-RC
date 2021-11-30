import React from 'react'
import { Wrapper } from './AboutMe.style'

const AboutMe = ({ text }) => {
  return (
    <Wrapper>
        <h2>About me</h2>
        <p>{text}</p>
    </Wrapper>
   
  )
}

export default AboutMe
