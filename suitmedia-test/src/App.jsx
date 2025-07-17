import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import './index.css';
import ListPost from './components/ListPost';

const appLinks = [
  { id: 1, label: 'Work', link: '/work' },
  { id: 2, label: 'About', link: '/about' },
  { id: 3, label: 'Services', link: '/services' },
  { id: 4, label: 'Ideas', link: '/ideas' },
  { id: 5, label: 'Careers', link: '/careers' },
  { id: 6, label: 'Contact', link: '/contact' },
];

const AppContent = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar links={appLinks} activePath={activePath} />
      <Hero links={appLinks} activePath={activePath} />

      <div className="relative z-50">
        <ListPost />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
