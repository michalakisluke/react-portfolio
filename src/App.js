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
      <div id="page-container">
        <div id="content-wrap">
          <Nav
            currentNav={currentNav}
            setCurrentNav={setCurrentNav}
          ></Nav>
          <div className="content">
            {
              pageRender(currentNav)
            }
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
