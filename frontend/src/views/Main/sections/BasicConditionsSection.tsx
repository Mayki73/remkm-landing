import React from "react";
import { FormattedMessage } from "react-intl";
import { IonIcon } from "@ionic/react";
import { carSportOutline, constructOutline, cafeOutline } from "ionicons/icons";

const BasicConditionsSection: React.FC = () => {
  return (
    <section className="flex items-center text-white py-10 md:py-20 w-full bg-black">
      <div className="max-w-7xl w-full px-5 md:mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 items-center">
        <div className="flex flex-col items-center">
          <IonIcon
            className="w-20 h-20 text-[#B8621B]"
            icon={carSportOutline}
          />
          <p className="text-xl max-w-[300px] text-center">
            <FormattedMessage id="MAIN.SUBTITLE.FIRST" />
          </p>
        </div>
        <div className="flex flex-col items-center">
          <IonIcon
            className="w-20 h-20 text-[#B8621B]"
            icon={constructOutline}
          />
          <p className="text-xl max-w-[300px] text-center">
            <FormattedMessage id="MAIN.SUBTITLE.SECOND" />
          </p>
        </div>
        <div className="flex flex-col items-center">
          <IonIcon className="w-20 h-20 text-[#B8621B]" icon={cafeOutline} />
          <p className="text-xl max-w-[300px] text-center">
            <FormattedMessage id="MAIN.SUBTITLE.THIRD" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default BasicConditionsSection;
