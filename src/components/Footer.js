import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
     <div className="Footer">
      <small>
        Curriculum created in React by <a href="https://www.github.com/nazarenoalt" target="_blank">@nazarenoalt</a>
        <br />
        <a href={`https://www.github.com/nazarenoalt/curriculum-v2`} target="_blank">sourcecode</a>
      </small>
    </div>
  )
}

export default Footer
