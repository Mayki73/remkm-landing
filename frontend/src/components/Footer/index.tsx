import React, { useDeferredValue } from "react";
import Logo from "../../assets/logo-remkm.png";
import { FormattedMessage } from "react-intl";

const Footer: React.FC = () => {
  const deferredLogo = useDeferredValue(Logo);
  
  return (
    <footer className="bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full py-10 px-5 md:mx-auto space-y-10 md:space-y-0">
        <img src={deferredLogo} alt="Логотип REMKM" />
        <div className="flex items-center space-x-6">
          <p className="text-2xl text-white">
            <FormattedMessage id="PHONE" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
