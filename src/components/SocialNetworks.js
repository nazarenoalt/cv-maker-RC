import React from 'react'
import '../styles/SocialNetworks.css'

const SocialNetworks = ({ data }) => {
  return (
    <div className="SocialNetworks Sidebar__item">
      <h2>Redes</h2>
      <ul>
        {data.map(item => (
        <li>
          <h3>{item.title}</h3>
          <span><a href={`https://www.${item.content}`} target="_blank">{item.content}</a></span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialNetworks
