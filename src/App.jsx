
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/pages/Home'
import Contact from './User/pages/Contact'
import Books from './User/pages/Books'
import Auth from './Pages/Auth'
import Profile from './User/pages/Profile'
import View from './User/pages/View'
import AdminDashboard from './Admin/pages/AdminDashboard'
import AdminResource from './Admin/pages/AdminResource'
import AdminSettings from './Admin/pages/AdminSettings'
import { useState } from 'react'
import Preloader from './Components/Preloader'

function App() {

  const [isLoading,setIsLoading]=useState(true)
  setTimeout(() => {
    setIsLoading(false)
    
  }, 3000);

  return (
    <>
      <Routes>
        <Route path='/' element={isLoading ? <Preloader/> : <Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />

        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/books/:id' element={<View />} />

        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/resources' element={<AdminResource />} />
        <Route path='/admin/settings' element={<AdminSettings />} />







      </Routes>
    </>
  )
}

export default App
