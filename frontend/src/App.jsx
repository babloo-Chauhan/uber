import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Start/>} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/home" element={
        <UserProtectedWrapper>
        <Home />
      </UserProtectedWrapper>} />
      <Route path="/users/logout" element={
        <UserProtectedWrapper>
        <UserLogout />
      </UserProtectedWrapper>} />
      <Route path="/captain-home" element={
        <CaptainProtectedWrapper>
          <CaptainHome />
        </CaptainProtectedWrapper>} />
        <Route path="/captains/logout" element={
        <CaptainProtectedWrapper>
          <CaptainLogout />
        </CaptainProtectedWrapper>} />


    </Routes>
    
  )
}

export default App
