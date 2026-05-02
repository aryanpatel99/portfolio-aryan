import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProjectsPage from './components/ProjectsPage'
import Experience from './components/Experience'
import Resume from './pages/Resume'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='bg-background text-foreground min-h-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/resume' element={<Resume />} />
          {/* catch 404 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App