import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SFMCSolutions from './pages/SFMCSolutions';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sfmc-solutions" element={<SFMCSolutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;