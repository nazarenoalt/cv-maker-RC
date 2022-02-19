import React from 'react'
import PrintPdfButton from '../Curriculum/components/PrintPdfButton'
// styles
import { Wrapper } from './Form.style'

const Form = ({ userData, setUserData }) => {

  const handleChange = e => {
    const { name, value, index } = e.target

    setUserData(prevState => {
      if(name === "firstName" || "lastName" || "jobTitle" || "description") {
        const header = { ...prevState.header }
        header[name] = value;
      
      return {
        ...prevState,
        header
      }
    }})
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
