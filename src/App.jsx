import React from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProjectsPage from './components/ProjectsPage'
import Experience from './components/Experience'
import Resume from './pages/Resume'

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-background text-foreground min-h-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/resume' element={<Resume />} />
          {/* catch 404 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App