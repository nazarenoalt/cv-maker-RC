import React from 'react'
import '../styles/Skills.css'

const Skills = ({ hardSkills, softSkills }) => {
  return (
    <div>
      <h2>Skills en desarrollo</h2>
      <ul>
        {hardSkills.map(item => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <h2>Soft Skills</h2>
      <ul>
        {softSkills.map(item => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
