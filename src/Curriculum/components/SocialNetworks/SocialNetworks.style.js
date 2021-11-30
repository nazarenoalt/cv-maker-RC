import styled from 'styled-components';

export const Wrapper = styled.div`
  li {
  margin-bottom: .5em;
  }

  .item ul {
    border-left: 0.05em solid var(--sidebar-color);
    padding-left: 1.5em;
    margin-left: 1.5em;
  }

  .item a {
    color: var(--sidebar-color);
    text-decoration: underline;
  }

  .item a:visited {
    color: var(--sidebar-color);
  }
`