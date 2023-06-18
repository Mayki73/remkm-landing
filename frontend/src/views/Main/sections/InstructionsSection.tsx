import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

const InstructionsSection: React.FC = () => {
  const intl = useIntl();

  const instructionList = [
    {
      id: 1,
      title: intl.formatMessage({ id: "CLEANING.INSTRUCTIONS.FIRST" }),
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "CLEANING.INSTRUCTIONS.SECOND" }),
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "CLEANING.INSTRUCTIONS.THIRD" }),
    },
  ];

  return (
    <section className="flex  text-white py-10 md:py-20 w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 flex items-center max-w-7xl w-full px-5 md:mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 items-center md:items-start">
        <h1 className="text-3xl md:text-5xl">
          <FormattedMessage
            id="CLEANING.INSTRUCTIONS"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h1>

        <ul className="flex flex-col space-y-3 justify-center list-disc list-inside text-xl md:text-2xl">
          {instructionList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InstructionsSection;
