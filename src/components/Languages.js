import React from 'react'
import '../styles/Languages.css'

const Languages = ({ data }) => {
  return (
    <div className="Languages">
      <h2 className="bottomLine">Lenguajes</h2>
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
  )
}

export default Languages
