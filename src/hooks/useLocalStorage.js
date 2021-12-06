import { useState, useEffect } from 'react'
// Data
import initialData from "../Form/initialData"

const useLocalStorage = () => {
  const [userData, setUserData] = useState(initialData);
  const localStorage = window.localStorage;

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userData))
    console.log('userdata')
  }, [userData, setUserData, localStorage])

  return {
    userData,
    setUserData
  }
}

export default useLocalStorage