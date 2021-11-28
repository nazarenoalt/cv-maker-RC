import React from 'react'
import { Wrapper } from './Contact.style'

const Contact = ({ data }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Contact
