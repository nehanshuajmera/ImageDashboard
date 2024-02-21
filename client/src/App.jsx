import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'

const App = () => {

  return (
    <>
      <div className="app">
        <Router>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
