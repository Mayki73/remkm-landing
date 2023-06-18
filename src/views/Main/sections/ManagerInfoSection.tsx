import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

const ManagerInfoSection: React.FC = () => {
  const intl = useIntl();

  const managerInfoList = [
    {
      id: 1,
      title: intl.formatMessage({ id: "MANAGER_SECTION.FIRST" }),
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "MANAGER_SECTION.SECOND" }),
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "MANAGER_SECTION.THIRD" }),
    },
  ];

  return (
    <section className="flex items-center text-white w-full bg-black">
      <div className="grid grid-cols-1 flex items-center space-y-10 md:space-y-0 md:grid-cols-2 max-w-7xl w-full py-10 md:py-20 px-5 md:mx-auto">
        <h2 className="text-xl md:text-3xl font-bold max-w-[30rem]">
          <FormattedMessage
            id="MANAGER_SECTION.TITLE"
            values={{
              b: (chunks) => (
                <div className="text-[#B8621B] font-bold">{chunks}</div>
              ),
            }}
          />
        </h2>
        <ul className="list-disc list-inside space-y-6 text-base md:text-lg">
          {managerInfoList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ManagerInfoSection;
