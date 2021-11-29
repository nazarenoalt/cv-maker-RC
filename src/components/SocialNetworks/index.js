import React from 'react'
import { Wrapper } from './SocialNetworks.style'
const SocialNetworks = ({ data }) => {
  return (
    <Wrapper>
      <div className="SocialNetworks Sidebar__item">
        <h2>Social Networks</h2>
        <ul>
          {data.map(item => (
          <li>
            <h3>{item.title}</h3>
            <span><a href={`https://www.${item.content}`} target="_blank">{item.content}</a></span>
          </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

export default SocialNetworks
