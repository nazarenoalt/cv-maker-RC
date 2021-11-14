import React from 'react'
import '../styles/HeaderProfile.css'

const HeaderProfile = ({userInfo}) => {
  console.log(userInfo)
  return (
    <div>
      <h1 className="Header__title">{userInfo.name}</h1>
      <h1 className="Header__title">{userInfo.surname}</h1>
      <p className="Header__jobTitle">{userInfo.jobTitle}</p>
    </div>
  )
}

export default HeaderProfile
