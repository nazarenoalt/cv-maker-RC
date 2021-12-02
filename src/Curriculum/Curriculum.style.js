import styled from "styled-components"

/* Next thing to do is to replace font-size value by the width of parent component */

export const Wrapper = styled.div`

  font-size: ${((document.querySelector("body").offsetWidth /2) / 100) * 1.5}px;
  display: grid;
  grid-template-areas: "sidebar header header"
                       "sidebar body body"
                       "sidebar body body";

  grid-template-columns  : repeat(3, 1fr) ;

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