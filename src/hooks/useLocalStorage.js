import React, { useState, useEffect } from 'react'
// Data
import data from "../db"

const useLocalStorage = () => {
  const initialData = {...data}
  const [userData, setUserData] = useState(initialData);

  const localStorage = window.localStorage;

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userData))
  }, [userData, setUserData])

  return {
    userData,
    setUserData
  }
}

export default useLocalStorage