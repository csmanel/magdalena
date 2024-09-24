import { useState } from 'react';
import './event_page.css';
import EventCard from './EventCard';
import { eventInfo } from './Event';

export const EventPage = () => {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  function handleNext() {
    setStep((prevStep) => Math.min(prevStep + 1, eventInfo.length - 1));
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
          <button
            disabled={step >= eventInfo.length - 1}
            onClick={handleNext}
            next
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
