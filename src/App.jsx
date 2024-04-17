import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactDOM } from 'react'

import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Main from './components/Main';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/Portfolio' element={<Portfolio />}> </Route>

            <Route path='*' element={<div>error</div>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
