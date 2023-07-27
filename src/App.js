import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Switch } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { Navbar } from "./components/Navbar";
import { Media } from "./components/Media";
import { Contact } from "./components/Contact";
import { Upcoming } from "./components/Upcoming";
import { Support } from "./components/Support";
import { SupportSummary } from "./components/SupportSummary";
import { NoMatch } from "./components/NoMatch";


function App() {
  return (
    <div className="main">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="media" element={<Media />} />

        <Route path="contact" element={<Contact />} />

        <Route path="upcoming" element={<Upcoming />} />

        <Route path="support" element={<Support />} />
        <Route path="support-summary" element={<SupportSummary />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
