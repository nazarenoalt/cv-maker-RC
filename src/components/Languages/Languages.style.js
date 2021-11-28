import styled from 'styled-components';

export const Wrapper = styled.div`
  .Languages__li {
    display: grid;
    grid-template-columns: 15rem auto;
  }

  .Languages ul {
    padding: 0;
  }
  .Languages__li div:nth-child(2) {
    margin-left: 1.5rem;
    padding-left: 1.5rem;
    border-left: 1px solid var(--light-gray);
    font-weight: bold;
    padding-bottom: 1.5rem;
  }

  .Languages__li h3 {
    margin: 0;
  }
`