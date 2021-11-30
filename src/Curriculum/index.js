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
import PrintPdfButton from "./components/PrintPdfButton"
import SeparatorLine from "./components/SeparatorLine"
// Styles
import { Wrapper } from "./Curriculum.style"
// Data
// Hooks
import useLocalStorage from "./hooks/useLocalStorage"

const Curriculum = () => {
  const { userData, setUserData } = useLocalStorage()
  
  return (
    <Wrapper>
      <PrintPdfButton />
      <Header>
        <HeaderProfile userInfo={userData.header} />
      </Header>

      <Sidebar>
        <AboutMe text={userData.header.text} />
        {/* An innocent separator line */}
        <SeparatorLine />
        <Contact data={userData.contact} />
        <SocialNetworks  data={userData.SocialNetworks} />
        {/* An innocent separator line */}
        <SeparatorLine /> 

        <Skills hardSkills={userData.hardSkills} softSkills={userData.softSkills} />
        <Hobbies hobbies={userData.hobbies} />
        <Footer />
      </Sidebar>

      <Body>
        <Education data={userData.education} />
        <Languages data={userData.languages} />
        <Repository data={userData.repository} />
      </Body>
      
    </Wrapper>
  )
}

export default Curriculum;
