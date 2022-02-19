import React, { useLayoutEffect, useState } from 'react'
// Components
import Curriculum from '../Curriculum'
import Form from '../Form'
// Styles
import { Wrapper, Container } from './Editor.style'
// Hooks
import useLocalStorage from '../hooks/useLocalStorage';

const Editor = () => {
  const [width, setWidth] = useState(0)
  const { userData, setUserData } = useLocalStorage();

  // Getting width of the curriculum container
  useLayoutEffect(() => {
    const container = document.querySelector('#cv-container')

    const updateSize = () => {
      const widthContainer = container.offsetWidth
      setWidth(widthContainer)
    }

    // First time execution
    updateSize();

    // Each time container resizes updateSize will be executed
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)

  }, [])
  
  return (
    <Wrapper>
      <Container>
        <Form
          userData={userData}
          setUserData={setUserData}
        />
      </Container>
      <Container>
        {/* This div is necessary to catch the curriculum parent width */}
        <div id="cv-container">
          <Curriculum
            width={width}
            userData={userData}
          />
        </div>
      </Container>
    </Wrapper>
  )
}

export default Editor
