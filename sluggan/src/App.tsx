import {HashRouter, Route, Routes} from 'react-router-dom';
import './assets/App.css';
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./pages/Projects.tsx";

function App() {
    return (
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<> <h1> hello!</h1> </>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;