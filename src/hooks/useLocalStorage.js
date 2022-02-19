import { useState, useEffect } from 'react'
// Data
import data from "../initialData.js"

const useLocalStorage = () => {
  const initialData = {...data}

  const localStorage = window.localStorage;
  const localUserData = localStorage.getItem('userInfo')
  const [userData, setUserData] = useState(() => localUserData ? JSON.parse(localUserData) : initialData);

  const resetLocalStorage = () => {
    setUserData(initialData)
  }

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userData))
    console.log('userdata')
  }, [userData, setUserData, localStorage])

  return {
    userData,
    setUserData,
    resetLocalStorage
  }
}

export default useLocalStorage