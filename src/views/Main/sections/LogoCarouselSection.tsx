import React, { useDeferredValue } from "react";
import LogoCarousel from "../../../components/LogoCarousel";
import Bork from "../../../assets/bork.png";
import Bosch from "../../../assets/bosch.png";
import Delonghi from "../../../assets/delonghi.png";
import Krups from "../../../assets/krups.png";
import Philips from "../../../assets/philips.png";
import Saeco from "../../../assets/saeco.png";
import Smeg from "../../../assets/smeg.png";
import Nivona from "../../../assets/nivona.png";
import Gaggia from "../../../assets/gaggia.png";
import Jura from "../../../assets/jura.png";
import Melitta from "../../../assets/melitta.png";
import Miele from "../../../assets/miele.png";

const LogoCarouselSection: React.FC = () => {
  const deferredBork = useDeferredValue(Bork);
  const deferredBosch = useDeferredValue(Bosch);
  const deferredDelonghi = useDeferredValue(Delonghi);
  const deferredKrups = useDeferredValue(Krups);
  const deferredPhilips = useDeferredValue(Philips);
  const deferredSaeco = useDeferredValue(Saeco);
  const deferredSmeg = useDeferredValue(Smeg);
  const deferredNivona = useDeferredValue(Nivona);
  const deferredGaggia = useDeferredValue(Gaggia);
  const deferredJura = useDeferredValue(Jura);
  const deferredMelitta = useDeferredValue(Melitta);
  const deferredMiele = useDeferredValue(Miele);
  
  return (
    <section className="flex justify-center h-[10rem] items-center text-white w-full bg-black">
      <LogoCarousel speed={17} direction="right">
        <img className="ml-20 w-full h-[6rem]" src={deferredBork} alt="Bork" />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredBosch}
          alt="Bosch"
        />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredDelonghi}
          alt="Delonghi"
        />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredKrups}
          alt="Krups"
        />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredPhilips}
          alt="Philips"
        />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredSaeco}
          alt="Saeco"
        />
        <img className="ml-20 w-full h-[6rem]" src={deferredSmeg} alt="Smeg" />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredNivona}
          alt="Nivona"
        />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredGaggia}
          alt="Gaggia"
        />
        <img className="ml-20 w-full h-[6rem]" src={deferredJura} alt="Jura" />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredMelitta}
          alt="Melitta"
        />
        <img
          className="ml-20 w-full h-[6rem]"
          src={deferredMiele}
          alt="Miele"
        />
      </LogoCarousel>
    </section>
  );
};

export default LogoCarouselSection;
