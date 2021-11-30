import React from 'react'
import { Wrapper } from './HeaderProfile.style'

const HeaderProfile = ({userInfo}) => {
  return (
    <Wrapper>
      <h1 className="title">{userInfo.name}</h1>
      <h1 className="title">{userInfo.surname}</h1>
      <p className="jobTitle">{userInfo.jobTitle}</p>
    </Wrapper>
  )
}

export default HeaderProfile
