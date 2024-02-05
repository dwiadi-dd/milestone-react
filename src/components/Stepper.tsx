import { useTranslation } from "react-i18next";
import { StepListType } from "../utils";
const Stepper = ({ step }: { step: number }) => {
  const { t } = useTranslation();

  return (
    <div className="stepper ">
      <h1 className="stepper-title">Step {step + 1}</h1>
      <ul className="mt-4 flex lg:flex-col flex-row gap-8 text-slate-400">
        {(t("stepList", { returnObjects: true }) as []).map(
          (item: StepListType, i: number) => (
            <li
              key={item.id}
              className="step-list"
              style={step >= i ? { color: "white" } : { color: "#64748b" }}
            >
              <p
                className=" step-number-actived"
                style={
                  step >= i
                    ? { borderColor: "white" }
                    : { borderColor: "#64748b" }
                }
              >
                {item.id}
              </p>
              {item.title}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Stepper;
