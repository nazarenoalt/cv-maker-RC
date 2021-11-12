import React from "react";
//container components
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Body from './containers/Body';
//organisms/molecules components
import AboutMe from './components/AboutMe';
import Title from './components/Title';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/AboutMe';
import JobPosition from './components/JobPosition';
import Languages from './components/Languages';
import Repository from './components/Repository';
import SocialNetworks from './components/SocialNetworks';

function App() {
  return (
    <div>
      <Header>
        <Title />
        <JobPosition />
      </Header>
      <Sidebar>
        <Contact />
        <SocialNetworks />
        <Footer />
      </Sidebar>
      <Body>
        <AboutMe />
        <Education />
        <Languages />
        <Repository />
      </Body>
    </div>
  );
}

export default App;
