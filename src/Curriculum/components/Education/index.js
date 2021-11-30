import React from 'react'
import { Wrapper } from './Education.style'

const Education = ({ data }) => {
  return (
    <Wrapper>
        <h2 className="title-separator">Education</h2>
        {data.map(item => (
          <li key={item.title}>
            <div>
              <h3>{item.institute}</h3>
              <p className="description">{item.description}<br />{item.date}</p>
            </div>
            
            <div>
              <h3>{item.title}</h3>
            </div>
          </li>
          ))}
    </Wrapper>
  )
}

export default Education
