import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
