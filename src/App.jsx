import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Project1Detail from './Components/Project/Project1Detail'
import Project2Detail from './Components/Project/Project2Detail'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projectss from './Components/Project/Projectss'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projectss />} />
        <Route path="/project-1-detail" element={<Project1Detail />} />
        <Route path="/project-2-detail" element={<Project2Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      <a
        href="https://wa.me/+923211130889"
        target='_blank'
         className="fixed bottom-16 right-6 z-50 m"
      >

        <img
          src="/whatsapps.png"
          alt="Fixed Icon"
          className="w-20 h-20  "
        />
      </a>
    </BrowserRouter>
  )
}

export default App
