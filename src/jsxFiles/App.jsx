import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar componentes
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';

// Importar páginas
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import CaseStudies from './CaseStudies.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';

// Importar configuración i18n
import '../i18n';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
