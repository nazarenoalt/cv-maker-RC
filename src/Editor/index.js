import React, { useLayoutEffect, useState } from 'react'
import Curriculum from '../Curriculum'
import { Wrapper, Container } from './Editor.style'

const Editor = () => {
  const [width, setWidth] = useState(0)

  // getting width of the curriculum container
  useLayoutEffect(() => {
    const container = document.querySelector('#cv-container')

    const updateSize = () => {
      const widthContainer = container.offsetWidth
      setWidth(widthContainer)
    }

    //first time execution
    updateSize();

    //each time container resizes updateSize will be executed
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)

  }, [])
  
  return (
    <Wrapper>
      <Container>
      </Container>
      <Container>
        {/*This div is necessary to catch the curriculum parent width*/}
        <div id="cv-container">
          <Curriculum width={width}/>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Editor
