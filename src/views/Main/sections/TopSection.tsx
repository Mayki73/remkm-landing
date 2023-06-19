import React from "react";
import { FormattedMessage } from "react-intl";
import PriceCard from "../../../components/PriceCard";
import TopSectionBackground from "../../../assets/top-section-bg.jpg";

const TopSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center pt-32 justify-center text-white bg-cover bg-center bg-no-repeat w-full h-[900px]"
      style={{ backgroundImage: `url(${TopSectionBackground})` }}
    >
      <div className="max-w-7xl w-full px-5 md:mx-auto">
        <div className="text-left space-y-10 md:space-y-20">
          <h1 className="text-3xl md:text-5xl max-w-[700px]">
            <FormattedMessage
              id="MAIN.TITLE"
              values={{
                b: (chunks) => (
                  <div className="text-[#B8621B] font-bold">{chunks}</div>
                ),
              }}
            />
          </h1>
          <PriceCard />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
