import React from 'react'
import '../styles/SocialNetworks.css'

const SocialNetworks = ({ data }) => {
  return (
    <div>
      <h2>Redes</h2>
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

export default SocialNetworks
