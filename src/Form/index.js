import React from 'react'
import PrintPdfButton from '../Curriculum/components/PrintPdfButton'
import { Wrapper } from './Form.style'
import useLocalStorage from '../hooks/useLocalStorage'

const Form = () => {

  const { userData, setUserData } = useLocalStorage();

  // Event handler
  const handleChange = e => {
    const { name, value } = e.target

    setUserData(prevState => {
      if(name === "firstName" || "lastName" || "jobTitle" || "description") {
        return (
          {
            ...prevState,
            header: {
              ...prevState.header,
              [name]:value
          }
          }
        )
      }

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
          value={userData.name}
          onChange={handleChange}  
        />

        <label htmlFor="lastName">Last name</label>
        <input 
          type="text"
          id="lastName"
          name="lastName"
          value={userData.name}
          onChange={handleChange}  
        />

        <label htmlFor="jboTitle">Job title</label>
        <input 
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={userData.name}
          onChange={handleChange}  
        />

        <label htmlFor="languages">Description about you</label>
        <textarea
          id="description"
          name="description"
          value={userData.description}
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
