import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'
import Homepage from './Pages/Homepage'
import AdminPage from './Pages/AdminPage'
import { AuthProvider } from './Store/Auth'


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/Register' element={<RegisterForm />} />

          <Route path='/Admin' element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
