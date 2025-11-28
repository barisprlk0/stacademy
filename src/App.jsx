import { useState } from 'react'
import MainPage from './pages/MainPage.jsx'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import './App.css'
import CourseDetailInfoCard from './components/courseDetailInfoCard'
function HomePage() {
  const navigate = useNavigate();
    <div>
      <button onClick={() => navigate("/home")} className="m-3">
        Go to home
      </button>

    </div>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
<Routes>
          <Route path="/" element={<MainPage/>} />

        <Route path="/home" element={<HomePage/>} />

</Routes>
    </Router>

    </>
  )
}

export default App
