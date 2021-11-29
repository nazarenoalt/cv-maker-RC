import React from "react"
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

const App = () => {
  return (
    <Wrapper>
      <PrintPdfButton />
      <Header>
        <HeaderProfile userInfo={{
          name: "Nazareno",
          surname: "Aznar Altamiranda",
          jobTitle: "Frontend | React Developer Jr."
        }} />
      </Header>

      <Sidebar>
        
        <div className="Sidebar__personal-info-section">
           <AboutMe 
          text="I stay in constantly learning, ductile and focused in team work. I am looking forward to improve my developer skills with new challenging projects. My main focus is to improve and facilitate the access to technology and information to the population, creating intuitive interfaces and comfortable experiences for any user."
        />
          <Contact data={[
            {
              title:"Cellphone",
              content:"(+54) 3644 724359"
            },
            {
              title:"Email",
              content:"nazalt256@gmail.com"
            }
          ]} />
          <SocialNetworks 
            data={[
              {
                title:"Github",
                content:"github.com/nazarenoalt"
              },
              {
                title:"Linkedin",
                content:"linkedin.com/in/nazarenoalt"
              },
              {
                title:"Platzi",
                content:"platzi.com/p/nazarenoalt"
              }
            ]} 
        />
        </div>
        <Skills 
          hardSkills={["Javascript", "HTML & CSS", "React", "MongoDB", "Webpack", "Babel","Git & Github", "NPM", "Bootstrap", "JSON/API managment"]}
          softSkills={["Assertive communication", "Oratory", "Critical thinking"]}
        />
        <Hobbies 
          hobbies={["Violoncello", "Running & strength exercises", "Cooking", "Finances & economy", "Cryptocurrencies"]}  
        />
        <Footer />
      </Sidebar>

      <Body>
       
        <Education 
          data={[
            {
              title: "High School",
              institute:"UEP N°82 \"Hogar de Bethania\"",
              description:"Saenz Peña, Chaco",
              date:"2016",
            },
            {
              title: "Frontend Development",
              institute:"Platzi",
              description:"Web development school & Javascript School.",
              date:"Oct. 2020 - present",
            },
            {
              title: "English",
              institute:"Platzi",
              description:"English School",
              date:"Oct. 2020 - present",
            }
          ]}
        />
        <Languages 
          data={[
             {
              title:"Spanish",
              content:"Native",
            },
            {
              title:"English",
              content:"Advance - B2",
            },
          ]}
        />
        
        <Repository 
          data={[
            {
              "title": "Bright Academy",
              "content": "Project for English teacher: Education platform, with login system, posts, token authentication. - Javascript, HTML and CSS, consuming a rest API",
              "link": "github.com/nazarenoalt/bright-academy",
            },
            {
              "title": "Pokemon Battle",
              "content": "Pokemon battle simulator - Javascript, HTML and CSS, consuming a rest API.",
              "link": "github.com/nazarenoalt/pokemon-battle",
            },
            {
              "title": "Piano Virtual SM",
              "content": "Virtual piano that emulate 'Simon says' game. - Javascript, HTML y CSS.",
              "link": "github.com/nazarenoalt/piano-virtual-SM",
            },
            {
              "title": "React Shop",
              "content": "Ecommerce app - React.js, HTML and CSS, Webpack, Babel. Consuming a rest API.",
              "link": "github.com/nazarenoalt/react-shop",
            },
            {
              "title": "Simply React TODO",
              "content": "Todo app. - React.js, HTML and CSS, LocalStorage.",
              "link": "github.com/nazarenoalt/simply-react-todo",
            },
            {
              "title": "Interactive Price Component",
              "content": "Interactive page to choose product prices. - Javascript, HTML and CSS, consuming a rest API.",
              "link": "github.com/nazarenoalt/interactive-pricing-component",
            },
            {
              "title": "Crowdfundfing Product Page",
              "content": "Landing Page with crowdfunding interface. - Javascript, HTML and CSS, consuming a rest API. ",
              "link": "github.com/nazarenoalt/crowdfunding-product-page",
            },
            {
              "title": "Platziconf Bootstrap",
              "content": "Bootstrap landing page. - Javascript, HTML, CSS, Bootstrap.",
              "link": "github.com/nazarenoalt/simply-react-todo",
            },
            {
              "title": "Curriculum (Mobile First)",
              "content": "First version of my curriculum in landing page format, which becomes a normal CV in desktop resolution. - HTML y CSS.",
              "link": "github.com/nazarenoalt/curriculum",
            },
          ]}
        />
      </Body>
    </Wrapper>
  )
}

export default App;
