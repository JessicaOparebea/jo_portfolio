import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/page'
import ErrorPage from './pages/not-found/page'
import Layout from './Layout'
import Gallery from './pages/gallery/page'
import ProjectsSlug from './pages/projects/slug/page'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects/:slug' element={<ProjectsSlug />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Layout>
      {/* <Route path="/blog/:slug" element={<OpenedBlog />} />; */}
    </BrowserRouter>
  )
}

export default App
