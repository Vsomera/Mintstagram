import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Calendar from './pages/Calendar'

function App() {

  return (
    <>
      <Router>
        <div className='pages'>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </div>
      </Router>      
    </>
  )
}

export default App
