import React from 'react'
import PrintPdfButton from '../Curriculum/components/PrintPdfButton'
import { Wrapper } from './Form.style'
import initialData from './initialData'

const Form = () => {
 
  const [form, setForm] = React.useState(initialData)
  
const handleChange = e => {
  const { name, value } = e.target

  setForm(prevState => {
    if(name === "firstName" || "lastName" || "jobTitle" || "description") {
      console.log('header')
      return (
        {
          ...prevState,
          header: {
            ...prevState.header,
            [name]:value
        }
        }
      )
      console.log('raiz')
    }

    return ({
      ...prevState,
      [name]: value
  })
  })
}

  return (
    <Wrapper>
        <h1>CV MAKER</h1>
      <form>
        <label htmlFor="firstName">First name</label>
        <input 
          type="text"
          id="firstName"
          name="firstName"
          value={form.name}
          onChange={handleChange}  
        />

        <label htmlFor="lastName">Last name</label>
        <input 
          type="text"
          id="lastName"
          name="lastName"
          value={form.name}
          onChange={handleChange}  
        />

        <label htmlFor="jboTitle">Job title</label>
        <input 
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={form.name}
          onChange={handleChange}  
        />

        <label htmlFor="languages">Description about you</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <label htmlFor="experience">Add experience </label>
        <input type="text" id="experience" name="experience" />

        <label htmlFor="projects">Add projects </label>
        <input type="text" id="project" name="project" />

        <PrintPdfButton />
      </form>
    </Wrapper>
  )
}

export default Form
