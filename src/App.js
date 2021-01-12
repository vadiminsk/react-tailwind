import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/menu' component={Menu} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
