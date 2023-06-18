import React from "react";
import { FormattedMessage } from "react-intl";
import Questionnaire from "../Questionnaire";
import SecondSectionBackground from "../../../assets/second-section-bg.jpeg";

const TestSection: React.FC = () => {
  return (
    <section
    id="price-section"
      className="flex flex-col items-center text-white bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${SecondSectionBackground})` }}
    >
      <div className="max-w-7xl w-full py-10 md:py-20 px-5 md:mx-auto">
        <div className="text-left">
          <h1 className="text-3xl md:text-5xl max-w-[700px]">
            <FormattedMessage
              id="MAIN.SECOND_BLOCK.TITLE"
              values={{
                b: (chunks) => (
                  <div className="text-[#B8621B] font-bold">{chunks}</div>
                ),
              }}
            />
          </h1>
          <Questionnaire
            className="mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default TestSection;
