import React from "react";
import { FormattedMessage } from "react-intl";

const GuaranteeSection: React.FC = () => {
  return (
    <section className="flex  text-white py-10 md:py-20 w-full bg-black">
      <div className="max-w-7xl w-full px-5 md:mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 items-center md:items-start">
        <p className="text-xl max-w-[320px] text-center">
          <FormattedMessage
            id="GUARANTEE.FIRST"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
              t: (chunks) => (
                <div className="text-[#B8621B] font-bold mb-5 text-3xl">
                  {chunks}
                </div>
              ),
            }}
          />
        </p>
        <p className="text-xl max-w-[300px] text-center">
          <FormattedMessage
            id="GUARANTEE.SECOND"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
              t: (chunks) => (
                <div className="text-[#B8621B] font-bold mb-5 text-3xl">
                  {chunks}
                </div>
              ),
            }}
          />
        </p>
        <p className="text-xl max-w-[300px] text-center">
          <FormattedMessage
            id="GUARANTEE.THIRD"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
              t: (chunks) => (
                <div className="text-[#B8621B] font-bold mb-5 text-3xl">
                  {chunks}
                </div>
              ),
            }}
          />
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
