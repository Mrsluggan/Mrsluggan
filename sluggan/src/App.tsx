
import './assets/App.css'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {

  return (
      <HashRouter>
        <nav >
          <ul style={{display:"flex",width:"100%", justifyContent:"space-evenly"}}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
  )
}

export default App
