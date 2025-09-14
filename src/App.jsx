import React from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProjectsPage from './components/ProjectsPage'
import Experience from './components/Experience'

const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-[rgba(0,0,0,.96)] text-white min-h-screen'>
      <Routes>
        <Route path='/' element={<Container/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        {/* catch 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App