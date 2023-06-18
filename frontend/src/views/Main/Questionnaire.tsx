import React from "react";
import StepByStepForm from "./StepByStepQuestionnaireForm";
import clsx from "clsx";

interface IProps {
  className?: string;
  setIsOpenModal?: () => void;
}

const Questionnaire: React.FC<IProps> = ({ className, setIsOpenModal }) => {
  return (
    <div
      className={clsx(
        "w-full p-5 md:p-10 text-black bg-white rounded-xl",
        className
      )}
    >
      <StepByStepForm setIsOpenModal={setIsOpenModal} />
    </div>
  );
};

export default Questionnaire;
