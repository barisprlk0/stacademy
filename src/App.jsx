import { useState } from 'react'
import MainPage from './pages/MainPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import './App.css'
import CourseDetailInfoCard from './components/courseDetailInfoCard'
function HomePage() {
  const navigate = useNavigate();
    <div>


    </div>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
<Routes>
          <Route path="/" element={<MainPage/>} />
        <Route path="/register" element={<RegisterPage/>} />

</Routes>
    </Router>

    </>
  )
}

export default App
