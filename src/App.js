import React from "react"
import './styles/Global.css'
//container components
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'
//organisms/molecules components
import AboutMe from './components/AboutMe'
import Title from './components/Title'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import JobPosition from './components/JobPosition'
import Languages from './components/Languages'
import Repository from './components/Repository'
import SocialNetworks from './components/SocialNetworks'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'

const App = () => {
  return (
    <div className="App">
      <Header>
        <Title text="Nazareno Aznar Altamiranda" />
        <JobPosition text="React Developer Jr." />
      </Header>

      <Sidebar>
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
              content:"linkedin.com/nazarenoalt"
            },
            {
              title:"Platzi",
              content:"platzi.com/p/nazarenoalt"
            }
          ]} 
        />
        <Skills 
          hardSkills={["Javascript", "HTML & CSS", "React", "MongoDB", "Webpack", "Babel","Git & Github", "NPM", "Bootstrap", "JSON/API managment"]}
          softSkills={["Comunicación asertiva", "Oratoria"]}
        />
        <Footer />
      </Sidebar>

      <Body>
        <AboutMe 
          text="En constante aprendizaje, ductil y enfocado en el trabajo en equipo, buscando mejorar mis habilidades de desarrollo en proyectos desafiantes. Mi enfoque principal es mejorar y facilitar el acceso de la tecnología y la informacion a la poblacion, creando interfaces intuitivas y experiencias confortables para cualquier usuario."
        />
        <Education 
          data={[
            {
              title: "Nivel Secundario",
              content:"UEP N°82 \"Hogar de Bethania\""
            },
            {
              title: "Desarrollo Frontend",
              content:"Escuela de Desarrollo Web & Escuela de Javascript - Platzi"
            },
            {
              title: "Ingles",
              content:"Escuela de Ingles - Platzi"
            }
          ]}
        />
        <Languages 
          data={[
            {
              title:"Ingles",
              content:"Avanzado - C2",
            }
          ]}
        />
        <Hobbies 
          hobbies={["Violonchelo", "Running & Fuerza", "Cocina", "Economía y Política"]}  
        />
        <Repository 
          data={[
            {
              "title": "Bright Academy",
              "content": "Plataforma de educación de ingles, sistema de usuarios, posts, autenticación por token.  - Javascript Vanilla, HTML y CSS, Consumiendo una API rest.",
              "link": "github.com/nazarenoalt/bright-academy",
            },
            {
              "title": "Pokemon Battle",
              "content": "Minijuego de pelea que simula la batalla clásica de Pokemon. - Javascript Vanilla, HTML y CSS, consumiendo una API rest.",
              "link": "github.com/nazarenoalt/pokemon-battle",
            },
            {
              "title": "Piano Virtual SM",
              "content": "Piano con minijuego que sigue la lógica del juego 'Simón Dice'. - Javascript Vanilla, HTML y CSS.",
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
  )
}

export default App;
