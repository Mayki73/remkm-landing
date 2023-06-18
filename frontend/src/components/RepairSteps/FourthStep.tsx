import React, { useDeferredValue } from "react";
import { FormattedMessage } from "react-intl";
import Tools from "../../assets/tools.png";
import Coffee from "../../assets/kofemashina.png";
import Protection from "../../assets/protection.png";
import Button from "../Form/Button";

interface IProps {
  onClickButton: () => void;
}

const FourthStep: React.FC<IProps> = ({ onClickButton }) => {
  const deferredCoffee = useDeferredValue(Coffee);
  const deferredTools = useDeferredValue(Tools);
  const deferredProtection = useDeferredValue(Protection);

  return (
    <>
      <div className="space-y-5">
        <h2 className="text-xl font-bold md:text-3xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_4.HEADER.TITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h2>
        <p className="text-base font-bold md:text-xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_4.HEADER.SUBTITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10 text-center">
        <div className="flex flex-col justify-center items-center">
          <img className="w-44 h-44" src={deferredCoffee} />
          <p className="">
            <FormattedMessage
              id="REPAIR_STEPS.TAB_4.FIRST_SECTION.TITLE"
              values={{
                b: (chunks) => <span className="font-bold">{chunks}</span>,
              }}
            />
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-44 h-44" src={deferredTools} />
          <p>
            <FormattedMessage
              id="REPAIR_STEPS.TAB_4.SECOND_SECTION.TITLE"
              values={{
                b: (chunks) => <span className="font-bold">{chunks}</span>,
              }}
            />
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-44 h-44" src={deferredProtection} />
          <p>
            <FormattedMessage
              id="REPAIR_STEPS.TAB_4.THIRD_SECTION.TITLE"
              values={{
                b: (chunks) => <span className="font-bold">{chunks}</span>,
              }}
            />
          </p>
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col md:flex-row justify-between space-x-10">
        <div className="space-y-5">
          <h2 className="text-xl font-bold md:text-3xl">
            <FormattedMessage id="REPAIR_STEPS.TAB_4.END.TITLE" />
          </h2>
          <p className="text-base md:text-xl">
            <FormattedMessage id="REPAIR_STEPS.TAB_4.END.SUBTITLE" />
          </p>
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

export default FourthStep;
