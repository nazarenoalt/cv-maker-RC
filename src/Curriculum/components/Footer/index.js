import React from 'react'
import { Wrapper } from './Footer.style.js'

const Footer = () => {
  return (
    <Wrapper>
        <small>
          Curriculum created in <a href={`https://www.github.com/nazarenoalt/cv-maker`} target="_blank" rel="noreferrer"> cv-maker</a>, a totally free and open-source editor.
        </small>
    </Wrapper>
  )
}

export default Footer
