import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Button from "../Form/Button";

interface IProps {
  onClickButton: () => void;
}

const SecondStep: React.FC<IProps> = ({ onClickButton }) => {
  const intl = useIntl();

  const firstCardList = [
    {
      id: 1,
      text: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_2.FIRST_CARD.LIST.FIRST",
      }),
    },
    {
      id: 2,
      text: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_2.FIRST_CARD.LIST.SECOND",
      }),
    },
  ];

  const secondCardList = [
    {
      id: 1,
      text: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_2.SECOND_CARD.LIST.FIRST",
      }),
    },
    {
      id: 2,
      text: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_2.SECOND_CARD.LIST.SECOND",
      }),
    },
    {
      id: 3,
      text: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_2.SECOND_CARD.LIST.THIRD",
      }),
    },
  ];

  const thirdCardList = [
    {
      id: 1,
      text: intl.formatMessage({
        id: "EPAIR_STEPS.TAB_2.THIRD_CARD.LIST.FIRST",
      }),
    },
    {
      id: 2,
      text: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_2.THIRD_CARD.LIST.SECOND",
      }),
    },
    {
      id: 3,
      text: intl.formatMessage({
        id: "REPAIR_STEPS.TAB_2.THIRD_CARD.LIST.THIRD",
      }),
    },
  ];

  return (
    <>
      <div className="bg-gray-50 text-black p-10 space-y-5">
        <h1 className="text-xl font-bold md:text-3xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_2.HEADER.TITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h1>
        <h2 className="text-base md:text-xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_2.HEADER.SUBTITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h2>
      </div>
      <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 gap-4 px-10">
        <div className="bg-gray-100 rounded-md p-5 space-y-3">
          <h3 className="text-base md:text-lg font-bold">
            <FormattedMessage id="REPAIR_STEPS.TAB_2.FIRST_CARD.TITLE" />
          </h3>
          <p className="font-bold">
            <FormattedMessage id="REPAIR_STEPS.TAB_2.FIRST_CARD.SUBTITLE" />
          </p>

          <ul className="marker:text-[#B8621B] list-disc list-inside">
            {firstCardList.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 rounded-md p-5 space-y-3">
          <h3 className="text-base md:text-lg font-bold">
            <FormattedMessage id="REPAIR_STEPS.TAB_2.SECOND_CARD.TITLE" />
          </h3>

          <p className="font-bold">
            <FormattedMessage id="REPAIR_STEPS.TAB_2.SECOND_CARD.SUBTITLE" />
          </p>

          <ul className="marker:text-[#B8621B] list-disc list-inside">
            {secondCardList.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 rounded-md p-5 space-y-3">
          <h2 className="text-base md:text-lg font-bold">
            <FormattedMessage id="REPAIR_STEPS.TAB_2.THIRD_CARD.TITLE" />
          </h2>
          <p className="font-bold">
            <FormattedMessage id="REPAIR_STEPS.TAB_2.THIRD_CARD.SUBTITLE" />
          </p>

          <ul className="marker:text-[#B8621B] list-disc list-inside">
            {thirdCardList.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
        <Button
          className="flex justify-center items-center px-10 py-4 mt-6 md:mt-0"
          onClick={onClickButton}
          textClassName="max-w-[20rem]"
        >
          <FormattedMessage id="BUTTON.GET_INFORMATION" />
        </Button>
      </div>
    </>
  );
};

export default SecondStep;
