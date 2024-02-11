import { useState } from "react";

export function useStepper(steps: Array<React.ReactNode>) {
  const [step, setStep] = useState(0);

  const next = () => {
    console.log("next");

    setStep((prevStep) => {
      if (prevStep >= 2) return prevStep;
      return prevStep + 1;
    });
  };

  const prev = () => {
    console.log("back");

    setStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  return {
    step,
    currentForm: steps[step],
    next,
    prev,
  };
}
