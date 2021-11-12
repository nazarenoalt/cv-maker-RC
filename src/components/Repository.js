import React from 'react'
import '../styles/Repository.css'

const Repository = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <span>{item.content}</span>
        </li>
      ))}
    </div>
  )
}

export default Repository
