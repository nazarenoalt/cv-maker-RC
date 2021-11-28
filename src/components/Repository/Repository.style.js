import styled from 'styled-components';

export const Wrapper = styled.div`
  /* .Repository__li {
    display: grid;
    grid-template-columns: 15rem auto;
  } */

  .Repository__project-title {
    margin: 0;
  }

  .Repository__li div:nth-child(2) {
    padding-left: 1.5rem;
    margin-left: 1.5rem;
    border-left: 1px solid var(--dark-gray);
    margin: 1rem 2px;
    }

  .Repository__project-description {
    margin-top: .5rem;
  }

  .Repository__project-description a {
    color: var(--light-gray);
    text-decoration: underline;
  }
`