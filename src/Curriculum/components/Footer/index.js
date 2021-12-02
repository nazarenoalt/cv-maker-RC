import React from 'react'
import './Footer.style.js'
import { Wrapper } from './Footer.style.js'

const Footer = () => {
  return (
    <Wrapper>
        <small>
          Curriculum created in <a href={`https://www.github.com/nazarenoalt/cv-maker`} target="_blank"> cv-maker</a>, a totally free and open-source editor.
        </small>
    </Wrapper>
  )
}

export default Footer
