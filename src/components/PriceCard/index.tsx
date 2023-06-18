import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContact } from "../../models/contact.model";
import { useIntl } from "react-intl";
import PriceCardForm from "./PriceCardForm";
import { enqueueSnackbar } from "notistack";
import { useSendEmail } from "../../services/request.service";
import { useForm } from "react-hook-form";

const PriceCard: React.FC = () => {
  const intl = useIntl();
  const { mutate: sendEmail } = useSendEmail((data) => {
    enqueueSnackbar(data, { variant: "success" });
    reset({
      phone: "",
    });
  });
  const QuestionFormSchema = yup.object({
    phone: yup
      .string()
      .required(intl.formatMessage({ id: "FORM.PHONE_REQUIRED" })),
  });

  const useFormReturn = useForm<IContact>({
    resolver: yupResolver(QuestionFormSchema),
  });

  const { reset } = useFormReturn;

  const submitContactForm = (contact: IContact) => {
    sendEmail(contact);
  };

  return (
    <div className="bg-white max-w-[35rem] w-full rounded-xl p-10">
      <h1 className="max-w-[600px] text-black text-2xl">
        <b>Получите расчет стоимости и сроков</b> ремонта вашей кофемашины за 5
        минут
      </h1>
      <p className="text-black mb-7 mt-3">
        <b>+ подарок:</b> чашка свежеобжаренного крафтового кофе
      </p>
      <PriceCardForm
        useFormInstance={useFormReturn}
        submitQuestionForm={submitContactForm}
      />
    </div>
  );
};

export default PriceCard;
