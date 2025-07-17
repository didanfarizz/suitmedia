import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Hero from './components/hero';
import './index.css';
import ListPost from './components/ListPost';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/Services';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/Contact';

const appLinks = [
  { id: 1, label: 'Work', link: '/work', path: <WorkPage /> },
  { id: 2, label: 'About', link: '/about', path: <AboutPage /> },
  { id: 3, label: 'Services', link: '/services', path: <ServicesPage /> },
  { id: 4, label: 'Ideas', link: '/', path: <ListPost /> },
  { id: 5, label: 'Career', link: '/career', path: <CareerPage /> },
  { id: 6, label: 'Contact', link: '/contact', path: <ContactPage /> },
];

const AppContent = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <AppNavbar links={appLinks} activePath={activePath} />
      <Hero links={appLinks} activePath={activePath} />

      <main className="container mx-auto px-4 py-8" style={{ paddingTop: '100px' }}>
        <Routes>
          {appLinks.map((link) => (
            <Route key={link.id} path={link.link} element={link.path} />
          ))}
        </Routes>
      </main>
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
