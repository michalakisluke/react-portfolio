import React from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
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
