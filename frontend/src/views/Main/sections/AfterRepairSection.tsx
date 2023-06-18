import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
  ClipboardDocumentIcon,
  CogIcon,
  SparklesIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import AfterRepair from "../../../assets/after_repair_bg.jpg";

const AfterRepairSection: React.FC = () => {
  const intl = useIntl();

  const afterRepair = [
    {
      icon: <CogIcon className="w-[5.5rem] h-[5,5rem]" />,
      title: intl.formatMessage({
        id: "AFTER_REPAIR_SECTION.LIST.FIRST.TITLE",
      }),
      description: intl.formatMessage({
        id: "AFTER_REPAIR_SECTION.LIST.FIRST.DESCRIPTION",
      }),
    },
    {
      icon: <FireIcon className="w-16 h-16" />,
      title: intl.formatMessage({
        id: "AFTER_REPAIR_SECTION.LIST.SECOND.TITLE",
      }),
      description: intl.formatMessage({
        id: "AFTER_REPAIR_SECTION.LIST.SECOND.DESCRIPTION",
      }),
    },
    {
      icon: <SparklesIcon className="w-16 h-16" />,
      title: intl.formatMessage({
        id: "AFTER_REPAIR_SECTION.LIST.THIRD.TITLE",
      }),
      description: intl.formatMessage({
        id: "AFTER_REPAIR_SECTION.LIST.THIRD.DESCRIPTION",
      }),
    },
  ];
  return (
    <section
     id="result-section"
      className="flex flex-col items-center text-white bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${AfterRepair})` }}
    >
      <div className="space-y-20 max-w-7xl w-full py-10 md:py-20 px-5 md:mx-auto">
        <h1 className="text-3xl text-center md:text-5xl">
          <FormattedMessage
            id="AFTER_REPAIR_SECTION.TITLE"
            values={{
              b: (chunks) => (
                <div className="text-[#B8621B] font-bold">{chunks}</div>
              ),
            }}
          />
        </h1>
        <div className="flex flex-col items-center space-y-5">
          {afterRepair.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col h-[15rem] md:h-[10rem] text-center md:text-left md:flex-row items-center shadow-md shadow-[#B8621B] w-full md:w-1/2 bg-white rounded-md py-6 p-2 md:p-5 text-black space-x-0 md:space-x-5"
              >
                {item.icon}
                <div className="space-y-2 mt-5 md:mt-0">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col h-[15rem] md:h-[10rem] text-center md:text-left md:flex-row items-center shadow-md shadow-[#B8621B] w-full md:w-1/2 bg-white rounded-md py-6 p-2 md:p-5 text-black space-x-0 md:space-x-5">
            <ClipboardDocumentIcon className="w-16 h-16" />
            <div className="mt-5 md:mt-0">
              <h2 className="text-xl font-semibold">
                <FormattedMessage id="AFTER_REPAIR_SECTION.DOCUMENTS" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterRepairSection;
