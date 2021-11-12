import React from 'react'

const Hobbies = ({ hobbies }) => {
  return (
    <div>
      {hobbies.map(item => (
        <li key={item}>
          <span>{item}</span>
        </li>
        ))}
    </div>
  )
}

export default Hobbies
