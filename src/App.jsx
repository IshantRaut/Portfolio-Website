import { useState } from 'react'
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Certificates from "./components/Certificates";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<main className="text-gray-400 bg-gray-900 body-font pt-28">
  <Navbar />
  <About />
  <Projects />
  <Skills />
  <Testimonials />
  <Certificates />
  <Contact />
</main>
    </>
  )
}

export default App
