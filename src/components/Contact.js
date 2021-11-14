import React from 'react'
import '../styles/Contact.css'

const Contact = ({ data }) => {
  return (
    <div className="Contact Sidebar__item">
      <h2>Contacto</h2>
      <ul>
        {data.map(item => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <span>{item.content}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Contact
