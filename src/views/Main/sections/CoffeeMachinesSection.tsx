import React, { useDeferredValue } from "react";
import CoffeeMachines from "../../../assets/coffee-machines.png";

const CoffeeMachinesSection: React.FC = () => {
  const deferredCoffeeMachines = useDeferredValue(CoffeeMachines);

  return (
    <section className="flex justify-center h-[15rem] items-center text-white w-full bg-black">
      <img
        className="absolute"
        src={deferredCoffeeMachines}
        alt="Три кофемашины которые наливают кофе"
      />
    </section>
  );
};

export default CoffeeMachinesSection;
