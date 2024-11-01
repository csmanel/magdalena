import { useState } from 'react';
import Card from './Card';
import CarouselButton from '../Buttons/CarouselButtons/CarouselButton';
import './About.css';

export const AboutPage = () => {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    setStep((step) => step - 1);
  }

  function handleNext() {
    setStep((step) => step + 1);
  }

  return (
    <div className="page-content">
      <Card step={step} />

      <div className="carousel-controls">
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
