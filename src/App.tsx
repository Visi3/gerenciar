import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Importação correta
import { FirebaseProvider } from './context/FirebaseContext';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Navigation from './components/Navigation';

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      <Navigation />
      {location.pathname === '/dashboard' && (
        <>
          <Income />
          <Expenses />
        </>
      )}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};


function App() {
  return (
    <FirebaseProvider>
      <Router>
        <AppContent/>
      </Router>
    </FirebaseProvider>
  );
}

export default App;