import './App.css';
import './index.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage/AboutPage';
import { Navbar } from './components/Navbar';
import { Contact } from './components/ContactPage/Contact';
import { Support } from './components/SupportPage/Support';
import { SupportSummary } from './components/SupportPage/SupportSummary';
import { EventPage } from './components/EventPage/EventPage';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { GrInstagram, GrFacebook } from 'react-icons/gr';
import backgroundImgOne from './assets/4958.jpg';

function App() {
  const isRoot = '/' === window.location.pathname;
  const location = useLocation();

  const [backgroundImg, setBackgroundImg] = useState(backgroundImgOne);

  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <div className="flex items-center justify-center">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="events" element={<EventPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="support" element={<Support />} />
              <Route path="support-summary" element={<SupportSummary />} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
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
            className="text-[#d2a56d] text-[20px] hover:text-[#fff5e9]"
          >
            <GrInstagram />
          </a>
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100094669223925"
            className="text-[#d2a56d] text-[20px] hover:text-[#fff5e9]"
          >
            <GrFacebook />
          </a> */}
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
