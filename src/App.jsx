import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/project'
import Project1Detail from './Components/Project/Project1Detail'
import Project2Detail from './Components/Project/Project2Detail'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ✅ Import your image (add correct path)
import Whatsapp from "./Components/Project/images/Whatsapps.png"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project-1-detail" element={<Project1Detail />} />
        <Route path="/project-2-detail" element={<Project2Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* ✅ Fixed image inside anchor tag (Bottom Right Corner) */}
      <a
        href="https://wa.me/+923211130889"
        target='_blank'
        className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300"
      >
        
        <img
          src={Whatsapp}
          alt="Fixed Icon"
          className="w-20 h-20 rounded-full shadow-lg "
        />
      </a>
    </BrowserRouter>
  )
}

export default App
