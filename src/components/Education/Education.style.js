import styled from 'styled-components';

export const Wrapper = styled.div`
  .Education h2 {
    margin-top: 0;
  }
  .Education__li {
    display: grid;
    grid-template-columns:15rem auto;
  }

  .Education__li div:nth-child(2) {
    padding-left: 1.5rem;
    margin-left: 1.5rem;
    border-left: .1rem solid var(--light-gray);
  }

  .Education__li h3 {
    margin: 0;
  }

  .Education__li-description {
    color: var(--light-gray);
    margin: 0;
    margin-bottom: 1.5rem;
  }
`