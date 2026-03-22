import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroller'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Connect from './pages/Connect'
import ScrollTopButton from './components/ScrollTopButton'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path='/connect' element={<Connect />} />
        </Routes>
        <ScrollTopButton/>
      </SmoothScroll>
    </Router>
  )
}

export default App