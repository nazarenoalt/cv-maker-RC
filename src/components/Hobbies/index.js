import React from 'react'
import { Wrapper } from './Hobbies.style'

const Hobbies = ({ hobbies }) => {
  return (
    <Wrapper>
      <div className="Sidebar__item">
        <h2>Hobbies</h2>
        <ul>
        {hobbies.map(item => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
        </ul>
        
      </div>
    </Wrapper>
  )
}

export default Hobbies
