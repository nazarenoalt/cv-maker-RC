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
import './styles/normalize.css'

const App = () => {
  return (
    <Wrapper>
      <div className="App">
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
            text="En constante aprendizaje, dúctil y enfocado en el trabajo en equipo, buscando mejorar mis habilidades de desarrollo en proyectos desafiantes. Mi enfoque principal es mejorar y facilitar el acceso de la tecnología y la información a la población, creando interfaces intuitivas y experiencias confortables para cualquier usuario."
          />
            <Contact data={[
              {
                title:"Celular",
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
            softSkills={["Comunicación asertiva", "Oratoria", "Pensamiento crítico"]}
          />
          <Hobbies 
            hobbies={["Violonchelo", "Running & Ejercicios de fuerza", "Cocina", "Economía & Finanzas", "Cryptocurrencies"]}  
          />
          <Footer />
        </Sidebar>

        <Body>
        
          <Education 
            data={[
              {
                title: "Nivel Secundario",
                institute:"UEP N°82 \"Hogar de Bethania\"",
                description:"Saenz Peña, Chaco",
                date:"2016",
              },
              {
                title: "Desarrollo Frontend",
                institute:"Platzi",
                description:"Escuela de Desarrollo Web & Escuela de Javascript.",
                date:"Oct. 2020 - Actualidad",
              },
              {
                title: "Inglés",
                institute:"Platzi",
                description:"Escuela de inglés",
                date:"Oct. 2020 - Actualidad",
              }
            ]}
          />
          <Languages 
            data={[
              {
                title:"Inglés",
                content:"Avanzado - C2",
              }
            ]}
          />
          
          <Repository 
            data={[
              {
                "title": "Bright Academy",
                "content": "Plataforma de educación para profesora de inglés, con sistema de usuarios, posts, autenticación por token. - Javascript Vanilla, HTML y CSS, Consumiendo una API rest.",
                "link": "github.com/nazarenoalt/bright-academy",
              },
              {
                "title": "Pokemon Battle",
                "content": "Minijuego de pelea que simula la batalla clásica de Pokemon. - Javascript Vanilla, HTML y CSS, consumiendo una API rest.",
                "link": "github.com/nazarenoalt/pokemon-battle",
              },
              {
                "title": "Piano Virtual SM",
                "content": "Piano con minijuego que sigue la lógica de 'Simón Dice'. - Javascript Vanilla, HTML y CSS.",
                "link": "github.com/nazarenoalt/piano-virtual-SM",
              },
              {
                "title": "React Shop",
                "content": "App de ecommerce - React.js, HTML y CSS, Webpack, Babel. Consumiendo una API rest.",
                "link": "github.com/nazarenoalt/react-shop",
              },
              {
                "title": "Simply React TODO",
                "content": "Aplicación TODO. - React.js, HTML y CSS, LocalStorage.",
                "link": "github.com/nazarenoalt/simply-react-todo",
              },
              {
                "title": "Interactive Price Component",
                "content": "Página con componentes interactivo para elegir precios de productos. - Javascript Vanilla, HTML y CSS.",
                "link": "github.com/nazarenoalt/interactive-pricing-component",
              },
              {
                "title": "Crowdfundfing Product Page",
                "content": "Landing Page con sistema interactivo para crowdfunding. - Javascript, HTML y CSS. ",
                "link": "github.com/nazarenoalt/crowdfunding-product-page",
              },
              {
                "title": "Platziconf Bootstrap",
                "content": "Landing Page hecha con Bootstrap. - Javascript, HTML, CSS, Bootstrap.",
                "link": "github.com/nazarenoalt/simply-react-todo",
              },
              {
                "title": "Curriculum (Mobile First)",
                "content": "Primera versión de este curriculum realizado en formato de landing page interactiva para celular, que en tamaño desktop adquiere el formato de un curriculum normal. - HTML y CSS.",
                "link": "github.com/nazarenoalt/curriculum",
              },
            ]}
          />
        </Body>
      </div>
    </Wrapper>
  )
}

export default App;
