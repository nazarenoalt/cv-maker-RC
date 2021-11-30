import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 3em;
  padding-top: 0;
  color: var(--dark-gray);
  grid-area: body;
  
  h2 {
    color: var(--body-color);
    padding-bottom: .5em;
  }

  .title-separator {
    border-bottom: 0.1em solid var(--body-color);
  }

  h3 {
    color: var(--body-secondary-color);
  }
`