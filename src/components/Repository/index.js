import React from 'react'
import { Wrapper } from './Repository.style'

const Repository = ({ data }) => {
  return (
    <Wrapper>
      <div className="Repository">
        <h2 className="title-separator">Projects and experience</h2>
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
    </Wrapper>
  )
}

export default Repository
