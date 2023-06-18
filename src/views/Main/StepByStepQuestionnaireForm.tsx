import React, { useDeferredValue, useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  checkmarkOutline,
  giftOutline,
  stopwatchOutline,
  cashOutline,
  checkmarkDoneCircleOutline,
} from "ionicons/icons";
import clsx from "clsx";
import FormOneImage from "../../assets/form_1.jpg";
import FormTwoImage from "../../assets/form_2.jpg";
import FormThreeImage from "../../assets/form_3.jpg";
import FormFourImage from "../../assets/form_4.jpg";
import Button from "../../components/Form/Button";
import PhoneNumberForm from "./PhoneNumberForm";
import { FormattedMessage } from "react-intl";

interface IProps {
  setIsOpenModal?: () => void;
}

const StepByStepForm: React.FC<IProps> = ({ setIsOpenModal }) => {
  const [step, setStep] = useState(0); // Current step index
  const [answers, setAnswers] = useState<string[]>([]); // Array to hold selected answers

  const deferredFormOneImage = useDeferredValue(FormOneImage);
  const deferredFormTwoImage = useDeferredValue(FormTwoImage);
  const deferredFormThreeImage = useDeferredValue(FormThreeImage);
  const deferredFormFourImage = useDeferredValue(FormFourImage);

  const formData = [
    {
      question: "01. Где используется кофемашина?",
      options: ["Дома", "В офисе", "Общепит", "В гос. учреждении", "Другое"],
      image: deferredFormOneImage,
      alt: "Кофемашина",
    },
    {
      question: "02. Какие работы необходимо провести?",
      options: ["Устранить неполадку", "Провести плановое ТО", "Другое"],
      image: deferredFormTwoImage,
      alt: "Кофемашина на белом фоне со стаканом кофе",
    },
    {
      question: "03. Где хотели бы провести ремонт?",
      options: [
        "Полноценный ремонт и ТО в сервисе",
        "Экспресс ремонт у вас на адресе",
        "Не имеет значения",
      ],
      image: deferredFormThreeImage,
      alt: "Человек наполняет кофейную чашу",
    },
    {
      question: "04. Когда последний раз проводили техническое обслуживание?",
      options: [
        "3-6 месяцев назад",
        "6-12 месяцев назад",
        "Более года назад",
        "Не проводили обслуживание",
        "Не знаю",
      ],
      image: deferredFormFourImage,
      alt: "Кофемашина вокруг которой стоит много чашек с кофе",
    },
  ];

  const handleAnswerSelection = (answer: string) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers, answer];
      return updatedAnswers;
    });

    setStep((prevStep) => prevStep + 1);
  };

  const handleSkipQuestion = () => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers, ""];
      return updatedAnswers;
    });

    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {step < formData.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold max-w-[35rem] w-fit">
              {formData[step].question}
            </h2>
            <div
              className={clsx("mt-8 max-w-[35rem] w-full space-y-2", {
                "grid grid-cols-1 md:grid-cols-2 gap-3 space-y-0":
                  formData[step].options.length > 3,
              })}
            >
              {formData[step].options.map((option, index) => (
                <button
                  key={index}
                  className={clsx(
                    "flex items-center px-4 py-2 bg-white text-[16px] w-full text-gray-500 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none hover:text-black"
                  )}
                  onClick={() => handleAnswerSelection(option)}
                >
                  <IonIcon
                    className="mr-2 w-8 h-8 font-bold bg-gray-300 rounded-md p-2"
                    icon={checkmarkOutline}
                  />
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-center mt-14 md:mt-20">
              <Button
                className="px-10 py-3"
                onClick={handleSkipQuestion}
                textClassName="max-w-[200px]"
              >
                <FormattedMessage id="QUIZ.SKIP_QUESTION" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              className="hidden w-max h-[450px] rounded-lg md:block"
              src={formData[step].image}
              alt={formData[step].alt}
            />
            <p className="mt-10 text-xl font-medium">
              <FormattedMessage id="QUIZ.AT_THE_FINISH" />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 space-x-0 md:space-x-5 mt-5">
              <div className="p-5 bg-gray-800 rounded-lg hover:scale-110">
                <div className="flex justify-center">
                  <IonIcon
                    className="text-white w-10 h-10"
                    icon={cashOutline}
                  />
                </div>
                <p className="text-white text-center mt-3">
                  <FormattedMessage id="QUIZ.AT_THE_FINISH_FIRST" />
                </p>
              </div>
              <div className="p-5 bg-gray-800 rounded-lg hover:scale-110">
                <div className="flex justify-center">
                  <IonIcon
                    className="text-white w-10 h-10"
                    icon={stopwatchOutline}
                  />
                </div>
                <p className="text-white text-center mt-3">
                  <FormattedMessage id="QUIZ.AT_THE_FINISH_SECOND" />
                </p>
              </div>
              <div className="p-5 bg-gray-800 rounded-lg hover:scale-110">
                <div className="flex justify-center">
                  <IonIcon
                    className="text-white w-10 h-10"
                    icon={giftOutline}
                  />
                </div>
                <p className="text-white text-center mt-3">
                  <FormattedMessage id="QUIZ.AT_THE_FINISH_THIRD" />
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-center pb-10">
            <IonIcon
              className="w-20 h-20 md:w-44 md:h-44 text-green-500"
              icon={checkmarkDoneCircleOutline}
            />
            <p className="max-w-[300px] text-center text-lg md:text-2xl font-medium">
              <FormattedMessage id="QUIZ.FINISH" />
            </p>
          </div>
          <div className="space-y-10">
            <h2 className="text-lg md:text-2xl font-bold">
              <FormattedMessage id="QUIZ.LEFT_CONTACTS" />
            </h2>
            <div className="space-y-2 pb-10">
              <div className="p-7 w-full bg-gray-800 max-w-[35rem] w-full rounded-lg flex items-center hover:scale-110">
                <IonIcon className="text-white w-10 h-10" icon={cashOutline} />
                <p className="text-white ml-10 text-sm md:text-lg font-semibold">
                  <FormattedMessage id="QUIZ.AT_THE_FINISH_SECOND" />
                </p>
              </div>
              <div className="p-7 w-full bg-gray-800 max-w-[35rem] w-full rounded-lg flex items-center hover:scale-110">
                <IonIcon
                  className="text-white w-10 h-10"
                  icon={stopwatchOutline}
                />
                <p className="text-white ml-10 text-sm md:text-lg font-semibold">
                  <FormattedMessage id="QUIZ.AT_THE_FINISH_FIRST" />
                </p>
              </div>
              <div className="p-7 w-full bg-gray-800 max-w-[35rem] w-full rounded-lg flex items-center hover:scale-110">
                <IonIcon className="text-white w-10 h-10" icon={giftOutline} />
                <p className="text-white ml-10 text-sm md:text-lg font-semibold">
                  <FormattedMessage id="QUIZ.AT_THE_FINISH_THIRD" />
                </p>
              </div>
            </div>

            <PhoneNumberForm
              setIsOpenModal={setIsOpenModal}
              answers={answers}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StepByStepForm;
