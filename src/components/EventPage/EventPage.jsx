import { useState } from 'react';
import './event_page.css';
import EventCard from './EventCard';

export const EventPage = () => {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    setStep((step) => step - 1);
  }

  function handleNext() {
    setStep((step) => step + 1);
  }

  return (
    <div className="page-content">
      <EventCard step={step} />

      <div className="carousel-controls">
        <div className="carousel-btn">
          <button disabled={step <= 0} onClick={() => handlePrevious()}>
            previous
          </button>
        </div>

        <div className="carousel-btn">
          <button disabled={step >= 1} onClick={() => handleNext()}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};
