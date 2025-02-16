import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const CaptainLogout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
    }, [token])
    // if (!token) {
    //     navigate('/captain-login')
    // }
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
            }
            localStorage.removeItem('token')
            navigate('/captain-login')
        })


  return (
    <div>
      captain logout
    </div>
  )
}

export default CaptainLogout
