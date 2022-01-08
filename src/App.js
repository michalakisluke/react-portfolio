import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav';
import Resume from './components/Resume'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {

  const [currentNav, setCurrentNav] = useState('about-me');

  const pageRender = () => {
    switch (currentNav) {
      case 'about-me':
        return <About />
      case 'contact':
        return <Contact />
      case 'resume':
        return <Resume />
      case 'portfolio':
        return <Portfolio />
      default:
        return <About />
    }
  };

  return (
    <main>
      <Nav
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      ></Nav>
      <div>
        {
          pageRender(currentNav)
        }
      </div>
      <Footer />
    </main>
  );
}

export default App;
