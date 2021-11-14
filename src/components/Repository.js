import React from 'react'
import '../styles/Repository.css'

const Repository = ({ data }) => {
  return (
    <div className="Repository">
      <h2 className="bottomLine">Proyectos y experiencia</h2>
      {data.map(item => (
        <li key={item.title} className="Repository__li">
          <div>
          <h3 className="Repository__project-title">{item.title}</h3>
          </div>
          <div>
          <span>{item.content}</span>
          <p className="Repository__project-description"><a target="_blank" href={`https://www.${item.link}`}>{item.link}</a></p>
          </div>
        </li>
      ))}
    </div>
  )
}

export default Repository
