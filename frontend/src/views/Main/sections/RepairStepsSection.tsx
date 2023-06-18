import React from "react";
import { FormattedMessage } from "react-intl";
import RepairSteps from "../../../components/RepairSteps";
import ToolsBackground from "../../../assets/tools-bg.png";

interface IProps {
  changeTestModalState: () => void;
}

const RepairStepsSection: React.FC<IProps> = ({ changeTestModalState }) => {
  return (
    <section
      id="repair-section"
      className="flex flex-col items-center text-white bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${ToolsBackground})` }}
    >
      <div className="space-y-20 max-w-7xl w-full py-10 md:py-20 px-5 md:mx-auto">
        <div className="flex justify-center">
          <h2 className="text-3xl text-center md:text-5xl mt-10 max-w-[30rem]">
            <FormattedMessage
              id="REPAIR_STEPS.TITLE"
              values={{
                b: (chunks) => (
                  <div className="text-[#B8621B] font-bold">{chunks}</div>
                ),
              }}
            />
          </h2>
        </div>

        <RepairSteps onClickButton={changeTestModalState} />
      </div>
    </section>
  );
};

export default RepairStepsSection;
