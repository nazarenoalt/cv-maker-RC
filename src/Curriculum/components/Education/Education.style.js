import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    margin-top: 0;
  }

  li {
    display: grid;
    grid-template-columns:15em auto;
  }

  li div:nth-child(2) {
    padding-left: 1.5em;
    margin-left: 1.5em;
    border-left: .1em solid var(--light-gray);
  }

  li h3 {
    margin: 0;
  }

  .description {
    color: var(--light-gray);
    margin: 0;
    margin-bottom: 1.5em;
  }
`