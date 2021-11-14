import React from 'react'

const Hobbies = ({ hobbies }) => {
  return (
    <div className="Sidebar__item">
      <h2>Hobbies</h2>
      <ul>
      {hobbies.map(item => (
        <li key={item} className="Skills__li">
          <span>{item}</span>
        </li>
      ))}
      </ul>
      
    </div>
  )
}

export default Hobbies
