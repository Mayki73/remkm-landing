import React, { useEffect, useState } from "react";
import TestModal from "../../components/TestModal";
import StartModal from "../../components/StartModal";
import TopSection from "./sections/TopSection";
import BasicConditionsSection from "./sections/BasicConditionsSection";
import TestSection from "./sections/TestSection";
import ManagerInfoSection from "./sections/ManagerInfoSection";
import AfterDiagnosticInfoSection from "./sections/AfterDiagnosticInfoSection";
import CoffeeMachinesSection from "./sections/CoffeeMachinesSection";
import RepairStepsSection from "./sections/RepairStepsSection";
import LogoCarouselSection from "./sections/LogoCarouselSection";
import AfterRepairSection from "./sections/AfterRepairSection";
import WeProvideSection from "./sections/WeProvideSection";
import ReplacementMachineSection from "./sections/ReplacementMachineSection";
import WaitingSection from "./sections/WaitingSection";
import InviteAfterRepairSection from "./sections/InviteAfterRepairSection";
import GuaranteeSection from "./sections/GuaranteeSection";
import AdditionalSection from "./sections/AdditionalSection";
import InstructionsSection from "./sections/InstructionsSection";
import ContactSection from "./sections/ContactSection";

const Main: React.FC = () => {
  const [isOpenTestModal, setIsOpenTestModal] = useState<boolean>(false);
  const [isOpenStartModal, setIsOpenStartModal] = useState<boolean>(false);

  const changeTestModalState = () => {
    setIsOpenTestModal(!isOpenTestModal);
  };

  const changeStartModalState = () => {
    setIsOpenStartModal(!isOpenStartModal);
  };

  useEffect(() => {
    setTimeout(() => {
      changeStartModalState();
    }, 30000);
  }, []);

  return (
    <main>
      <TestModal isOpen={isOpenTestModal} setIsOpen={changeTestModalState} />
      <StartModal isOpen={isOpenStartModal} setIsOpen={changeStartModalState} />

      <TopSection />

      <BasicConditionsSection />

      <TestSection />

      <ManagerInfoSection />

      <AfterDiagnosticInfoSection changeTestModalState={changeTestModalState} />

      <CoffeeMachinesSection />

      <RepairStepsSection changeTestModalState={changeTestModalState} />

      <LogoCarouselSection />

      <AfterRepairSection />

      <WeProvideSection />

      <ReplacementMachineSection />

      <WaitingSection />

      <InviteAfterRepairSection />

      <GuaranteeSection />

      <AdditionalSection />

      <InstructionsSection />

      <ContactSection />
    </main>
  );
};

export default Main;
