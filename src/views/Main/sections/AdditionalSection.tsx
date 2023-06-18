import React, { useDeferredValue } from "react";
import { FormattedMessage } from "react-intl";
import CleaningBackground from "../../../assets/cleaning.png";
import Tablets from "../../../assets/tablets.png";
import Powder from "../../../assets/powder.png";

const AdditionalSection: React.FC = () => {
  const deferredPowder = useDeferredValue(Powder);
  const deferredTablets = useDeferredValue(Tablets);

  return (
    <section
      id="special-things-section"
      className="flex flex-col items-center text-white bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${CleaningBackground})` }}
    >
      <div className="space-y-20 max-w-7xl w-full py-10 md:py-20 px-5 md:mx-auto">
        <h1 className="text-2xl text-center">
          <FormattedMessage
            id="CLEANING.TITLE"
            values={{
              b: (chunks) => (
                <span className="text-[#B8621B] font-bold">{chunks}</span>
              ),
              t: (chunks) => (
                <p className="text-[#B8621B] font-bold mb-5 text-3xl md:text-5xl">
                  {chunks}
                </p>
              ),
            }}
          />
        </h1>

        <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
          <div className="relative">
            <img className="h-[50rem] rounded-md" src={deferredPowder} />
            <p className="absolute left-7 top-7 p-3 bg-white/70 text-black font-bold rounded-md w-[20rem]">
              <FormattedMessage id="CLEANING.POWDER" />
            </p>
          </div>
          <div className="relative">
            <img className="h-[50rem] rounded-md" src={deferredTablets} />
            <p className="absolute left-7 top-7 p-3 bg-white/70 text-black font-bold rounded-md w-[20rem]">
              <FormattedMessage id="CLEANING.TABLETS" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSection;
