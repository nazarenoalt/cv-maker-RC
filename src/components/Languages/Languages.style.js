import styled from 'styled-components';

export const Wrapper = styled.div`
  li {
    display: grid;
    grid-template-columns: 15rem auto;
  }

  ul {
    padding: 0;
  }
  li div:nth-child(2) {
    margin-left: 1.5rem;
    padding-left: 1.5rem;
    border-left: 1px solid var(--light-gray);
    font-weight: bold;
    padding-bottom: 1.5rem;
  }

  li h3 {
    margin: 0;
  }
`