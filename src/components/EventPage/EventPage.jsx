import { useState } from 'react';
import EventCard from './EventCard';
import { eventInfo } from './Event';
import CarouselButton from '../Buttons/CarouselButtons/CarouselButton';

export const EventPage = () => {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  function handleNext() {
    setStep((prevStep) => Math.min(prevStep + 1, eventInfo.length - 1));
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#bd7e4a] bg-opacity-95 shadow-lg rounded-lg mt-32 p-10 pt-40 max-h-[650px] max-w-[1000px] z-10">
      <EventCard step={step} />

      <div className="flex pt-0">
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
