import Stepper from "./components/Stepper";
import FormRegister from "./components/Form";
import { useStepper } from "../../hooks/useStepper";

function RegisterPage() {
  const { step, next, prev } = useStepper(["0", "1", "2"]);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="bg-white w-full lg:w-1/3 text-white shadow-lg flex flex-col">
        <Stepper step={step} />
      </div>

      <FormRegister step={step} next={next} prev={prev} />
    </div>
  );
}

export default RegisterPage;
