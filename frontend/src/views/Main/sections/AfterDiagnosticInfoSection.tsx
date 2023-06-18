import React from "react";
import InteractiveImage from "../../../components/InteractiveImage";
import ThirdSectionBackground from "../../../assets/third-section-bg.jpg";
import { FormattedMessage, useIntl } from "react-intl";
import Button from "../../../components/Form/Button";

interface IProps {
  changeTestModalState: () => void;
}

const AfterDiagnosticInfoSection: React.FC<IProps> = ({
  changeTestModalState,
}) => {
  const intl = useIntl();

  const afterDiagnosticInfoList = [
    {
      id: 1,
      title: intl.formatMessage({ id: "AFTER_DIAGNOSTIC_SECTION.LIST.FIRST" }),
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "AFTER_DIAGNOSTIC_SECTION.LIST.SECOND" }),
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "AFTER_DIAGNOSTIC_SECTION.LIST.THIRD" }),
    },
  ];

  return (
    <section
      id="diagnostic-section"
      className="flex flex-col items-center text-white bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${ThirdSectionBackground})` }}
    >
      <div className="max-w-7xl w-full py-10 md:py-20 px-5 md:mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-10">
            <h2 className="text-3xl md:text-5xl max-w-[30rem]">
              <FormattedMessage
                id="AFTER_DIAGNOSTIC_SECTION.TITLE"
                values={{
                  b: (chunks) => (
                    <div className="text-[#B8621B] font-bold">{chunks}</div>
                  ),
                }}
              />
            </h2>
            <p className="text-2xl">
              <FormattedMessage
                id="AFTER_DIAGNOSTIC_SECTION.SUBTITLE"
                values={{
                  b: (chunks) => (
                    <div className="text-[#B8621B] font-bold">{chunks}</div>
                  ),
                }}
              />
            </p>
            <ul className="list-disc list-inside text-xl space-y-5">
              {afterDiagnosticInfoList.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center my-14">
            <InteractiveImage />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between max-w-1/2">
          <p className="text-2xl max-w-[600px] text-center md:text-left">
            <FormattedMessage
              id="AFTER_DIAGNOSTIC_SECTION.CONTACT"
              values={{
                b: (chunks) => (
                  <div className="text-[#B8621B] font-bold">{chunks}</div>
                ),
              }}
            />
          </p>
          <Button
            className="px-10 py-4 mt-6 md:mt-0"
            onClick={changeTestModalState}
            textClassName="max-w-[300px]"
          >
            <FormattedMessage id="BUTTON.GET_INFORMATION" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AfterDiagnosticInfoSection;
