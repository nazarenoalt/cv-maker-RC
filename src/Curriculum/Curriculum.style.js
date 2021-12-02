import styled from "styled-components"

/* Next thing to do is to replace font-size value by the width of parent component */

export const Wrapper = styled.div`
  
  font-size: ${props => props.width / 100 * 1.5}px;
  display: grid;
  grid-template-areas: "sidebar header header"
                       "sidebar body body"
                       "sidebar body body";

  grid-template-columns  : repeat(3, 1fr) ;
  margin: 2em;
  box-shadow: 0 0  100px rgba(0,0,0,0.9);
  
  .Sidebar {
    grid-area: sidebar;
  }

  .Header {
    grid-area: header;
  }

  .Body {
    grid-area: body;
  }
`