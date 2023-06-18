import React from "react";
import { FormattedMessage } from "react-intl";
import PhoneNumberForm from "../PhoneNumberForm";
import Phone from "../../../assets/phone.png";

const InviteAfterRepairSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center text-white bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${Phone})` }}
    >
      <div className="space-y-20 max-w-7xl w-full py-24 md:py-44 px-5 md:mx-auto">
        <h1 className="text-3xl text-center md:text-5xl">
          <FormattedMessage
            id="INVITE_AFTER_REPAIR.TITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
            }}
          />
        </h1>

        <div className="flex flex-col items-center space-x-0 md:space-x-10 md:flex-row space-y-10 md:space-y-0 justify-between">
          <div className="space-y-8">
            <h2 className="text-xl md:text-2xl max-w-[30rem] font-bold">
              <FormattedMessage id="INVITE_AFTER_REPAIR.SUBTITLE" />
            </h2>

            <div className="rounded-md bg-white shadow-md shadow-[#B8621B] items-center p-10 text-black text-xl max-w-[30rem]">
              <FormattedMessage
                id="INVITE_AFTER_REPAIR.CARD.FIRST"
                values={{
                  b: (chunks) => (
                    <span className="text-[#B8621B] font-bold">{chunks}</span>
                  ),
                }}
              />
            </div>
            <div className="rounded-md bg-white items-center p-10 text-black text-xl max-w-[30rem]">
              <FormattedMessage
                id="INVITE_AFTER_REPAIR.CARD.SECOND"
                values={{
                  b: (chunks) => (
                    <span className="text-[#B8621B] font-bold">{chunks}</span>
                  ),
                }}
              />
            </div>
            <div className="rounded-md bg-white items-center p-10 text-black text-xl max-w-[30rem]">
              <FormattedMessage
                id="INVITE_AFTER_REPAIR.CARD.THIRD"
                values={{
                  b: (chunks) => (
                    <span className="text-[#B8621B] font-bold">{chunks}</span>
                  ),
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-10 h-fit bg-white rounded-md text-black space-y-10">
            <h1 className="text-xl max-w-[18rem]">
              <FormattedMessage
                id="INVITE_AFTER_REPAIR.FORM.TITLE"
                values={{
                  b: (chunks) => (
                    <p className="text-[#B8621B] font-bold text-4xl mb-3">
                      {chunks}
                    </p>
                  ),
                }}
              />
            </h1>

            <PhoneNumberForm className="max-w-[20rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteAfterRepairSection;
