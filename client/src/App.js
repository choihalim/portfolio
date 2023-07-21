import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import NavBar from './components/NavBar'
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home darkMode={darkMode} />} />
          <Route exact path='/portfolio' element={<Projects darkMode={darkMode} />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/resume' element={<Resume darkMode={darkMode} />} />
          <Route exact path='/about' element={<About darkMode={darkMode} />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
