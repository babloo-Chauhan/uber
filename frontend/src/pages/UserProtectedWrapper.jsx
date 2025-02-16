import React, { useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { use } from 'react'



const UserProtectedWrapper = ({
    children
}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
  // useEffect(() => { 

  //   }
  // }, [token])
  if (!token) {
    navigate('/login')
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectedWrapper
