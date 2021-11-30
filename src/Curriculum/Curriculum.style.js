import styled from "styled-components"

export const Wrapper = styled.div`
  font-size: ${((document.querySelector("body").offsetWidth / 2) / 100) * 1.5}px;
  display: grid;
  grid-template-areas: "sidebar header header"
    "sidebar body body"
    "sidebar body body";
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