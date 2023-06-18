import React from "react";
import { IonIcon } from "@ionic/react";
import { hammerOutline, searchSharp } from "ionicons/icons";
import { FormattedMessage } from "react-intl";
import Button from "../Form/Button";

interface IProps {
    onClickButton: () => void;
}

const FirstStep: React.FC<IProps> = ({
    onClickButton,
}) => {
  return (
    <>
      <div className="bg-gray-50 p-10 space-y-5">
        <h2 className="text-xl font-bold md:text-3xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_1.HEADER.TITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h2>
        <p className="text-base md:text-xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_1.HEADER.SUBTITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </p>
      </div>

      <div className="p-10 space-y-5">
        <h2 className="text-xl md:text-3xl">
          <FormattedMessage
            id="REPAIR_STEPS.TAB_1.MIDDLE.TITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h2>
        <p className="text-base md:text-xl font-semibold">
          <FormattedMessage id="REPAIR_STEPS.TAB_1.MIDDLE.SUBTITLE" />
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <div className="flex items-center space-x-7 max-w-[20rem]">
            <IonIcon icon={hammerOutline} className="w-20 h-20" />
            <p>
              <FormattedMessage id="REPAIR_STEPS.TAB_1.MIDDLE.LIST.FIRST" />
            </p>
          </div>
          <div className="flex items-center space-x-7 max-w-[20rem]">
            <IonIcon icon={searchSharp} className="w-24 h-24" />
            <p>
              <FormattedMessage id="REPAIR_STEPS.TAB_1.MIDDLE.LIST.SECOND" />
            </p>
          </div>
        </div>
      </div>

      <div className="p-10 bg-gray-50 flex flex-col md:flex-row justify-between">
        <div className="space-y-5 max-w-[50rem]">
          <p className="text-xl font-bold md:text-3xl">
            <FormattedMessage
              id="REPAIR_STEPS.TAB_1.END.TITLE"
              values={{
                b: (chunks) => (
                  <span className="text-[#B8621B] font-bold">{chunks}</span>
                ),
              }}
            />
          </p>
          <p className="text-base md:text-xl">
            <FormattedMessage
              id="REPAIR_STEPS.TAB_1.END.SUBTITLE"
              values={{
                b: (chunks) => (
                  <span className="text-[#B8621B] font-bold">{chunks}</span>
                ),
              }}
            />
          </p>
        </div>
        <Button
          className="px-10 py-4 mt-6 md:mt-0"
          onClick={onClickButton}
          textClassName="max-w-[300px]"
        >
          <FormattedMessage id="BUTTON.GET_INFORMATION" />
        </Button>
      </div>
    </>
  );
};

export default FirstStep;
