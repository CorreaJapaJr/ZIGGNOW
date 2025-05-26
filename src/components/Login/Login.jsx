import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'
import LoginCreate from './LoginCreate'

const Login = () => {
  return (
    <div>
          <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='/criar' element={<LoginCreate/>} />
        <Route path='/perdeu' element={<LoginLost/>} />
        <Route path='/reset' element={<LoginReset/>} />

          </Routes>
    </div>
  )
}

export default Login
