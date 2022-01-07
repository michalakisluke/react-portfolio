import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {

  const [nav] = useState([
    {
      name: 'about-me'
    },
    {
      name: 'projects'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    },
  ]);

  const [currentNav, setCurrentNav] = useState(nav[0]);
  
  return (
    <div>
      <Nav
        nav={nav}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      ></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
