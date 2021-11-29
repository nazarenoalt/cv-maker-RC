import React from 'react'
import { Wrapper } from './Languages.style'

const Languages = ({ data }) => {
  return (
    <Wrapper>
      <div className="Languages">
        <h2 className="bottomLine">Languages</h2>
        {data.map(item => (
          <ul>
            <li key={item.title} className="Languages__li">
              <div>
                <h3>{item.title}</h3>
              </div>
              <div>
                <span>{item.content}</span>
              </div>
            </li>
          </ul>
          
          ))}
      </div>
    </Wrapper>
  )
}

export default Languages
