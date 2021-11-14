import React from 'react'
import '../styles/AboutMe.css'

const AboutMe = ({ text }) => {
  return (
    <div className="AboutMe">
      <h2>Sobre mí</h2>
      <p>{text}</p>
    </div>
  )
}

export default AboutMe
