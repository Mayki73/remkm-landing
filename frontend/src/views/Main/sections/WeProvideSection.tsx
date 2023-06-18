import {
  CameraIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

const WeProvideSection: React.FC = () => {
  const intl = useIntl();

  const weProvideList = [
    {
      id: 1,
      icon: <CameraIcon className="w-14 h-14 mr-6 text-[#B8621B]" />,
      title: intl.formatMessage({ id: "WE_PROVIDE.IMAGE" }),
    },
    {
      id: 2,
      icon: <VideoCameraIcon className="w-14 h-14 mr-6 text-[#B8621B]" />,
      title: intl.formatMessage({ id: "WE_PROVIDE.VIDEO" }),
    },
    {
      id: 3,
      icon: <PhoneIcon className="w-16 h-16 mr-8 text-[#B8621B]" />,
      title: intl.formatMessage({ id: "WE_PROVIDE.DISCUSS" }),
    },
  ];

  return (
    <section className="flex justify-center items-center text-white w-full bg-black">
      <div className="flex items-center grid grid-cols-1 md:grid-cols-2 gap-x-10 max-w-7xl w-full px-5 py-10 md:py-20 md:mx-auto">
        <div className="space-y-3">
          <h1 className="text-xl md:text-3xl max-w-[50rem]">
            <FormattedMessage
              id="DIAGNOSTIC.TITLE"
              values={{
                b: (chunks) => (
                  <span className="text-[#B8621B] font-bold">{chunks}</span>
                ),
              }}
            />
          </h1>
          <h2 className="text-lg md:text-xl">
            <FormattedMessage id="DIAGNOSTIC.SUBTITLE" />
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-xl">
            <FormattedMessage
              id="WE_PROVIDE"
              values={{
                b: (chunks) => (
                  <span className="text-[#B8621B] font-bold">{chunks}</span>
                ),
              }}
            />
          </p>
          <ul className="list-none space-y-5 list-inside">
            {weProvideList.map((item) => (
              <li key={item.id} className="flex items-center max-w-[25rem]">
                {item.icon} {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WeProvideSection;
