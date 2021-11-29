import React, { useState } from "react"
// Container components
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'
// Organisms/molecules components
import AboutMe from './components/AboutMe'
import HeaderProfile from './components/HeaderProfile'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Languages from './components/Languages'
import Repository from './components/Repository'
import SocialNetworks from './components/SocialNetworks'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
// Styles
import { Wrapper } from "./App.style"
import './normalize.css'
import PrintPdfButton from "./components/PrintPdfButton"
// Data
import data from "./db"

const App = () => {
  const initialState = {...data}
  const [state, setState] = useState(initialState);
  
  return (
    <Wrapper>
      <PrintPdfButton />
      <Header>
        <HeaderProfile userInfo={state.header} />
      </Header>

      <Sidebar>
        <div className="Sidebar__personal-info-section">
          <AboutMe text={state.header.text} />
          <Contact data={state.contact} />
          <SocialNetworks  data={state.SocialNetworks} />
        </div>

        <Skills hardSkills={state.hardSkills} softSkills={state.softSkills} />
        <Hobbies hobbies={state.hobbies} />
        <Footer />
      </Sidebar>

      <Body>
        <Education data={state.education} />
        <Languages data={state.languages} />
        <Repository data={state.repository} />
      </Body>
      
    </Wrapper>
  )
}

export default App;
