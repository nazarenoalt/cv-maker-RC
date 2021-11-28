import React from 'react'
import { Wrapper } from './Skills.style'

const Skills = ({ hardSkills, softSkills }) => {
  return (
    <Wrapper>
    <div className="Skills Sidebar__item">
      <h2>Habilidades</h2>
      <ul>
        {hardSkills.map(item => (
          <li key={item} className="Skills__li">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
      
    <div className="Skills Sidebar__item">
      <h2>Habilidades Blandas</h2>
      <ul>
        {softSkills.map(item => (
          <li key={item} className="Skills__li">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    </Wrapper>
  )
}

export default Skills
