import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstructionPage from './pages/InstructionPage';
import DemoPage from './pages/DemoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
    return (
        <div className="App">
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/instructions">Instructions</Link>
            </li>
            <li>
                <Link to="/demo">Demo</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/instructions" element={<InstructionPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/about" element={<AboutPage />} />    
            <Route path="/contact" element={<ContactPage />} />   
        </Routes>
        </div>
    );
}

export default App;
