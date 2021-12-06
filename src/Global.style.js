import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  :root {
    /*colors*/
    --white: rgb(255, 255, 255);
    --black: rgb(0, 0, 0);
    --dark-gray: rgb(67, 66, 68);
    --light-gray: rgb(110, 110, 110);
    --red: rgb(192, 32, 43);
    /*colors by section*/
    --body-background: var(--white);
    --body-color: var(--dark-gray);
    --body-secondary-color: var(--red);
    --body-third-color: var(--light-gray);
    --header-background: var(--white);
    --header-color: var(--dark-gray);

    --sidebar-background: var(--red);
    --sidebar-color: var(--white);
  }

  html {
    
    /*When changing HTML font-size, it's necessary to change Body.js "rem" state, because it calculate the rem measure apart*/
    font-size: 1.5vw;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: Lato, sans-serif;
  }


  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2 {
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
  }
 
`

