import { useState } from 'react';
import EventCard from './EventCard';
import { eventInfo } from './Event';
import CarouselButton from '../Buttons/CarouselButtons/CarouselButton';
import './event_page.css';

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
        <CarouselButton
          label="Previous"
          onClick={handlePrevious}
          disabled={step <= 0}
        />
        <CarouselButton
          label="Next"
          onClick={handleNext}
          disabled={step >= eventInfo.length - 1}
        />
      </div>
    </div>
  );
};
