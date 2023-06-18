import React, { useDeferredValue } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Steam from "../../assets/treatment-icon1.svg";
import SpecialMeans from "../../assets/treatment-icon2.svg";
import Cleaning from "../../assets/treatment-icon3.svg";

const ThirdStep: React.FC = () => {
  const intl = useIntl();
  const deferredSteam = useDeferredValue(Steam);
  const deferredSpecialMeans = useDeferredValue(SpecialMeans);
  const deferredCleaning = useDeferredValue(Cleaning);

  const stepList = [
    {
      id: 1,
      title: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_3.SECOND_SECTION.LIST.FIRST",
      }),
    },
    {
      id: 2,
      title: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_3.SECOND_SECTION.LIST.SECOND",
      }),
    },
    {
      id: 3,
      title: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_3.SECOND_SECTION.LIST.THIRD",
      }),
    },
  ];

  return (
    <>
      <div className="p-10 space-y-5">
        <h1 className="text-xl font-bold md:text-3xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_3.HEADER.TITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h1>
        <h2 className="text-base font-bold md:text-xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_3.HEADER.SUBTITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10 p-10 space-y-10 md:space-y-0">
        <div className="flex flex-col items-center space-y-4">
          <img className="w-20 h-20" src={deferredSteam} alt="Пар" />
          <h3 className="text-base md:text-lg font-bold text-center">
            <FormattedMessage id="REPAIR_STEPS.TAB_3.FIRST_SECTION.TITLE" />
          </h3>
          <p className="text-gray-[700] text-center">
            <FormattedMessage id="REPAIR_STEPS.TAB_3.FIRST_SECTION.SUBTITLE" />
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-20 h-20"
            src={deferredSpecialMeans}
            alt="Чистящие средства"
          />
          <h3 className="text-base md:text-lg font-bold text-center">
            <FormattedMessage id="REPAIR_STEPS.TAB_3.SECOND_SECTION.TITLE" />
          </h3>
          <ul className="text-gray-[700] text-center list-disc list-inside marker:text-[#B8621B]">
            {stepList.map((step) => (
              <li key={step.id}>{step.title}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-20 h-20"
            src={deferredCleaning}
            alt="Щит, защищающий от бактерий"
          />
          <h3 className="text-base md:text-lg font-bold text-center">
            <FormattedMessage id="REPAIR_STEPS.TAB_3.THIRD_SECTION.TITLE" />
          </h3>
          <p className="text-gray-[700] text-center">
            <FormattedMessage id="REPAIR_STEPS.TAB_3.THIRD_SECTION.SUBTITLE" />
          </p>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
