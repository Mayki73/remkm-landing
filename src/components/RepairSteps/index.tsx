import { useIntl } from "react-intl";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

interface IProps {
  onClickButton: () => void;
}

const RepairSteps: React.FC<IProps> = ({ onClickButton }) => {
  const intl = useIntl();

  const tabList: {
    id: number;
    name: string;
  }[] = [
    {
      id: 1,
      name: intl.formatMessage({ id: "REPAIR_STEPS.TAB_1.TITLE" }),
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "REPAIR_STEPS.TAB_2.TITLE" }),
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "REPAIR_STEPS.TAB_3.TITLE" }),
    },
    {
      id: 4,
      name: intl.formatMessage({ id: "REPAIR_STEPS.TAB_4.TITLE" }),
    },
  ];

  return (
    <Tabs className="rounded-md">
      <TabList className="grid grid-cols-1 md:grid-cols-4 bg-white text-gray-600">
        {tabList.map((tab) => (
          <Tab
            key={tab.id}
            className="p-8 outline-none border-b hover:bg-[#B8621B] hover:text-black transition-all"
            selectedClassName="bg-[#B8621B] text-black"
          >
            <div className="p-2 bg-gray-200/80 rounded-md max-w-[5rem]">
              {intl.formatMessage({ id: "PHASE" }, { number: tab.id })}
            </div>
            <p className="text-xl mt-5">{tab.name}</p>
          </Tab>
        ))}
      </TabList>

      <TabPanel className="bg-white text-black">
        <FirstStep onClickButton={onClickButton} />
      </TabPanel>

      <TabPanel className="text-black space-y-5 bg-white">
        <SecondStep onClickButton={onClickButton} />
      </TabPanel>

      <TabPanel className="text-black space-y-5 bg-white">
        <ThirdStep />
      </TabPanel>

      <TabPanel className="text-black space-y-20 bg-white p-10">
        <FourthStep onClickButton={onClickButton} />
      </TabPanel>
    </Tabs>
  );
};

export default RepairSteps;
