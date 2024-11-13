import { useState } from 'react';
import Card from './Card';
import CarouselButton from '../Buttons/CarouselButtons/CarouselButton';

export const AboutPage = () => {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    setStep((step) => step - 1);
  }

  function handleNext() {
    setStep((step) => step + 1);
  }

  return (
    <div className="mx-auto mt-20 p-6 flex flex-col items-center justify-center bg-[rgba(189,126,74,0.96)] shadow-lg rounded-2xl max-h-full md:max-h-[650px] max-w-[90%] sm:max-w-[600px] md:max-w-[1000px]">
      <Card step={step} />

      <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-6">
        <CarouselButton
          label="Previous"
          onClick={handlePrevious}
          disabled={step <= 0}
        />
        <CarouselButton
          label="Next"
          onClick={handleNext}
          disabled={step >= 6}
        />
      </div>
    </div>
  );
};
