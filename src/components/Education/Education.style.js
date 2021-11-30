import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    margin-top: 0;
  }

  li {
    display: grid;
    grid-template-columns:15rem auto;
  }

  li div:nth-child(2) {
    padding-left: 1.5rem;
    margin-left: 1.5rem;
    border-left: .1rem solid var(--light-gray);
  }

  li h3 {
    margin: 0;
  }

  .description {
    color: var(--light-gray);
    margin: 0;
    margin-bottom: 1.5rem;
  }
`