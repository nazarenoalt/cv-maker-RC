import styled from 'styled-components'

export const Wrapper = styled.div`
  .Sidebar {
    height: 100%;
    background-color: var(--sidebar-background);
    color: var(--sidebar-color);
    padding: 2rem;
  }

  /*Changes that affect all items of sidebar*/

  .Sidebar h3 {
    font-size: 1rem;
    font-weight: bolder;
    margin-bottom: .2rem;
  }

  .Sidebar h2 {
    font-size: 1.3rem;
  }

  /*Styles over all sidebar items*/
  .Sidebar__item {
    margin-bottom: 3rem;
  }

  .Sidebar__item > ul {
    border-left: 0.05rem solid var(--sidebar-color);
    padding-left: 1.5rem;
    margin-left: 1.5rem;
  }
  .Sidebar__item:last-child {
    margin-bottom: 0;
  }

  .Sidebar .AboutMe {
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 0.05rem solid var(--sidebar-color);
  }
  .Sidebar__personal-info-section {
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 0.05rem solid var(--sidebar-color);
  }

  .Sidebar__item a {
    color: var(--sidebar-color);
    text-decoration: underline;
  }

  .Sidebar__item a:visited {
    color: var(--sidebar-color);
  }
`