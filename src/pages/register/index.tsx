import logo from "../../assets/FA_DIGICAMP_LOGO_WHITE.png";
import Stepper from "./components/Stepper";
import FormRegister from "./components/Form";
import { useStepper } from "../../hooks/useStepper";

function RegisterPage() {
  const { step, next, prev } = useStepper(["0", "1", "2"]);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="bg-slate-700 w-full lg:w-1/3 text-white shadow-2xl flex flex-col">
        <header>
          <img
            src={logo}
            alt="logo digicamp"
            className="lg:w-[200px] w-[10em] pt-4 pl-4"
          />
        </header>

        <Stepper step={step} />
      </div>

      <FormRegister step={step} next={next} prev={prev} />
    </div>
  );
}

export default RegisterPage;
