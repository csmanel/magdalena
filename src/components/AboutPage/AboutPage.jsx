import { useState } from "react";
import "../../About.css";
import  Card  from "./Card"

export const AboutPage = () => {
  const [step, setStep] = useState(0)

  function handlePrevious() {
    setStep((step) => step - 1)
  }

  function handleNext() {
    setStep((step) => step + 1)
  }

  return (
    <div className="page-content">
      <Card step={step}/>

      <div className="carousel-controls">
        <div className="carousel-btn">
            <button disabled={ step <= 0 } onClick={() => handlePrevious()}>previous</button>
        </div>
          
        <div className="carousel-btn">
          <button disabled={ step >= 5 } onClick={() => handleNext()}>next</button>
        </div>
      </div>  
    </div>
  );
};


// className={`carousel-btn ${step >= 0 ? 'carousel-btn-inactive' : ''}`
// {/* if button is <= 0 styling for inactive */}
// {/* if button is >= 5 styling for inactive */}