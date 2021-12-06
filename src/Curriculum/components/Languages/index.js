import React from 'react'
import { Wrapper } from './Languages.style'

const Languages = ({ data }) => {
  return (
    <Wrapper>
        <h2 className="title-separator">Languages</h2>
        {data.map(item => (
            <li key={item.title}>
              {/*each div is a column*/}
              <div>
                <h3>{item.title}</h3>
              </div>
              <div>
                <span>{item.content}</span>
              </div>
            </li>
          ))}
    </Wrapper>
  )
}

export default Languages
