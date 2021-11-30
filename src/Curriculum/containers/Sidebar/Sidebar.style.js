import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background-color: var(--sidebar-background);
  color: var(--sidebar-color);
  padding: 2em;
  grid-area: sidebar;

    /*Changes that affect all items of sidebar*/
  h3 {
    font-size: 1em;
    font-weight: bolder;
    margin-bottom: .2em;
  }

  h2 {
    font-size: 1.3em;
  }
`