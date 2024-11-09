// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import DonationBanner from './DonationBanner'; // Import DonationBanner
import WelcomeImage from './WelcomeImage';
// import Footer from './Footer'; // Commented out
// import Home from './Home'; // Commented out
// import About from './About'; // Commented out
// import Donate from './Donate'; // Commented out
// import Blog from './Blog'; // Commented out
// import ContactPage from './ContactPage'; // Commented out
// import Testimonials from './Testimonials'; // Commented out
// import Projects from './Projects'; // Commented out
// import ProjectsPage from './ProjectsPage'; // Commented out

function App() {
  return (
    <Router>
      <Navbar />
      <WelcomeImage />
      <DonationBanner /> {/* Display Donation Banner */}
      
      {/* <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectsPage />} />
        </Routes>
      </div> */}
      
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
