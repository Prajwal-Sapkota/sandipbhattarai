import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroller'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </SmoothScroll>
    </Router>
  )
}

export default App