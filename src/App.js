import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import HomePage from './pages/HomePage';
import InstructionPage from './pages/InstructionPage';
import DemoPage from './pages/DemoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import logo from './assets/trainmrlogo.png';
import './App.css';

function App() {
    // manage user ID, running only once when first loaded
    useEffect(() => {
        // check if user ID already exists in browser storage
        const userId = localStorage.getItem('amrAnnotatorId');
        // if no ID found, create new and save
        if (!userId) {
            localStorage.setItem('amrAnnotatorId', uuidv4());
        }
    }, []);
    return (
        <div className="App">
        <nav className="navbar">
            <div className=" navsection navbar-left">
                <Link to="/">
                    <img src={logo} alt="TRAINMRlogo" className="navbar-logo" />
                </Link>
            </div>
            
            <div className="navsection navbar-center">

            </div>

            <div className="navsection navbar-right">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/instructions">Tutorial</Link>    {/*called instructions page in this code */}
                </li>
                <li>
                    <Link to="/demo">Annotation Practice</Link>     {/*called demo page in this code */}
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </ul>
            </div>
            
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
