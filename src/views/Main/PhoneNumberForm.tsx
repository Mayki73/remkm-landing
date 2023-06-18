import React from "react";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { FormattedMessage, useIntl } from "react-intl";
import { IContact } from "../../models/contact.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import clsx from "clsx";
import { useSendEmail } from "../../services/request.service";
import { Controller, useForm } from "react-hook-form";

interface IProps {
  answers?: string[];
  className?: string;
  setIsOpenModal?: () => void;
}

const PhoneNumberForm: React.FC<IProps> = ({
  answers,
  className,
  setIsOpenModal,
}) => {
  const intl = useIntl();
  const { mutate: sendEmail } = useSendEmail((data) => {
    enqueueSnackbar(data, { variant: "success" });
    reset({
      phone: "",
    });
    setIsOpenModal ? setIsOpenModal() : null;
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
    const data = {
      phone: contact.phone,
      answers: answers?.join(", "),
    };
    console.log(data);
    sendEmail(data);
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormReturn;

  return (
    <form
      className={clsx(
        "space-y-6 items-center text-center max-w-[612px] w-full",
        className
      )}
      onSubmit={handleSubmit(submitContactForm)}
    >
      <Controller
        name="phone"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            mask="+375 (99) 999-99-99"
            maskChar=" "
            placeholder="+375 (__) ___-__-__"
            className="max-w-[360px] w-full text-2xl text-black"
            wrapperClassName="text-center"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
          />
        )}
      />
      <Button
        className="px-10 py-3"
        textClassName="max-w-[300px]"
        type="submit"
      >
        <FormattedMessage id="BUTTON.GET_INFORMATION" />
      </Button>
    </form>
  );
};

export default PhoneNumberForm;
