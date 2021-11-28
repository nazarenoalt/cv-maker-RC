import React from 'react'
import { Wrapper } from './Education.style'

const Education = ({ data }) => {
  return (
    <Wrapper>
      <div className="Education">
        <h2 className="bottomLine">Educacion</h2>
        {data.map(item => (
          <li key={item.title} className="Education__li">
            <div>
              <h3>{item.institute}</h3>
              <p className="Education__li-description">{item.description}<br />{item.date}</p>
              
            </div>
            <div>
              <h3>{item.title}</h3>
            </div>
          </li>
          ))}
      </div>
    </Wrapper>
  )
}

export default Education
