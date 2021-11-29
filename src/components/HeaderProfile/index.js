import React from 'react'
import { Wrapper } from './HeaderProfile.style'

const HeaderProfile = ({userInfo}) => {
  return (
    <Wrapper>
      <h1 className="Header__title">{userInfo.name}</h1>
      <h1 className="Header__title">{userInfo.surname}</h1>
      <p className="Header__jobTitle">{userInfo.jobTitle}</p>
    </Wrapper>
  )
}

export default HeaderProfile
