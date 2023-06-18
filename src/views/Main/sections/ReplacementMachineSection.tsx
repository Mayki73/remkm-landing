import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
  HomeIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import NewCoffeeMachine from "../../../assets/new_coffee_bg.png";

const ReplacementMachineSection: React.FC = () => {
  const intl = useIntl();

  const replacementList = [
    {
      id: 1,
      icon: <HomeIcon className="w-8 h-8" />,
      title: intl.formatMessage({ id: "HOME" }),
    },
    {
      id: 2,
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      title: intl.formatMessage({ id: "OFFICE" }),
    },
    {
      id: 3,
      icon: <BuildingStorefrontIcon className="w-8 h-8" />,
      title: intl.formatMessage({ id: "CAFE" }),
    },
  ];

  return (
    <section
      className="flex flex-col items-center text-white bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${NewCoffeeMachine})` }}
    >
      <div className="space-y-20 max-w-7xl w-full py-14 md:py-24 px-5 md:mx-auto">
        <h1 className="text-2xl max-w-[50rem]">
          <FormattedMessage
            id="REPLACEMENT.TITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
              f: (chunks) => (
                <p className="text-3xl md:text-5xl mb-8">{chunks}</p>
              ),
            }}
          />
        </h1>

        <div className="p-8 bg-white rounded-md max-w-[40rem] space-y-6 md:space-y-10">
          <p className="text-xl md:text-2xl text-black">
            <FormattedMessage
              id="REPLACEMENT.CARD.TITLE"
              values={{
                b: (chunks) => (
                  <span className="text-[#B8621B] font-bold">{chunks}</span>
                ),
              }}
            />
          </p>
          <ul className="flex flex-col md:flex-row justify-between text-black space-y-5 md:space-y-0 text-lg">
            {replacementList.map((item) => (
              <li
                key={item.id}
                className="flex flex-col justify-center border-b md:border-b-0 border-[#B8621B] md:flex-row items-center space-x-2 space-y-2 md:space-y-0"
              >
                {item.icon}
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-3 max-w-[30rem]">
          <CircleStackIcon className="w-14 h-14" />
          <p className="text-lg md:text-xl text-white">
            <FormattedMessage
              id="COST"
              values={{
                b: (chunks) => (
                  <span className="text-[#B8621B] font-bold">{chunks}</span>
                ),
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReplacementMachineSection;
