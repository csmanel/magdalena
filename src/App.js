import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage/AboutPage';
import { Navbar } from './components/Navbar';
import { Contact } from './components/ContactPage/Contact';
import { Support } from './components/SupportPage/Support';
import { SupportSummary } from './components/SupportPage/SupportSummary';
import { GrInstagram } from 'react-icons/gr';
import { GrFacebook } from 'react-icons/gr';
import { EventPage } from './components/EventPage/EventPage';
import backgroundImgOne from './assets/background-five.jpg';
import backgroundImgTwo from './assets/m-lightbrown.png';

function App() {
  const isRoot = '/' === window.location.pathname;

  const [backgroundImg, setBackgroundImg] = useState(backgroundImgOne);

  return (
    <div className="landing">
      <Navbar />
      <div className="landing-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="events" element={<EventPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<Support />} />
          <Route path="support-summary" element={<SupportSummary />} />
        </Routes>
      </div>
      <div className="footer-container">
        <div className="footer-text">
          <p>magdalena.ensemble@gmail.com</p>
        </div>
        <div className="footer-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/magdalena.ensemble/"
            className="footer-icons"
          >
            <GrInstagram />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100094669223925"
            className="footer-icons"
          >
            <GrFacebook />
          </a>
        </div>
      </div>
      <img
        src={backgroundImg}
        className={`background-wrapper ${isRoot ? '' : 'unfocused'}`}
        alt=""
      />
    </div>
  );
}

export default App;
