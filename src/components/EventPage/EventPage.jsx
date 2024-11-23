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
    <div className="flex flex-col items-center justify-center bg-[#bd7e4a] bg-opacity-95 shadow-lg rounded-lg mt-32 pt-10 pr-10 pb-5 pl-10  max-w-[1000px] xl:max-h-[500px] xl:mt-16 xl:pt-5">
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
