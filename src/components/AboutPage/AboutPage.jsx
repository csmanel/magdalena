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

      <div className="buttons">
          
          {step > 0 && <button onClick={() => handlePrevious()}>previous</button>}
      </div>
        
      <div className="buttons">
        {step < 3 && <button onClick={() => handleNext()}>next</button>}
      </div>

    </div>
 
  );
};