import React, { useDeferredValue } from "react";
import Logo from "../../assets/logo-remkm.png";
import { FormattedMessage } from "react-intl";

const Footer: React.FC = () => {
  const deferredLogo = useDeferredValue(Logo);

  return (
    <footer className="bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full py-10 px-5 md:mx-auto space-y-10 md:space-y-0">
        <img src={deferredLogo} alt="Логотип REMKM" />
        <p className="text-2xl text-white">
          <FormattedMessage id="PHONE" />
        </p>
        <div className="text-gray-700">
          <p>Юридический адрес: г. Минск ул. Калиновского 64,41</p>
          <p>УНП 192834683</p> <p>IBAN BY63 ALFA 3013 2735 8800 1027 0000</p>
          <p>СВИФТ - ALFABY2X</p>
          <p>
            ЗАО "Альфа-Банк" ул. Сурганова, 43-47, 220013 Минск, Республика
            Беларусь
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
