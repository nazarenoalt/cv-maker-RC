import React from 'react'
import { Wrapper } from './Form.style'


const Form = () => {
  return (
    <Wrapper>
        <h1>CV MAKER</h1>
      <form>
        <span>First name</span>
        <input type="text" />

        <span>Last name</span>
        <input type="text" />

        <span>Education</span>
        <input type="text" />

        <span>Languages</span>
        <input type="text" />

        <span>Experience </span>
        <input type="text" />
        <button>Hola</button>
      </form>
    </Wrapper>
  )
}

export default Form
