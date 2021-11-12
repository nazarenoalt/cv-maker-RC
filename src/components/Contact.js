import React from 'react'
import '../styles/Contact.css'

const Contact = ({ data }) => {
  return (
    <div>
      <h2>Contacto</h2>
      <ul>
        {data.map(item => (
        <li>
          <h3>{item.title}</h3>
          <span>{item.content}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Contact
