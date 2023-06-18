import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { FormattedMessage } from "react-intl";
import { IContact } from "../../models/contact.model";
import { Controller, UseFormReturn } from "react-hook-form";

interface IProps {
  useFormInstance: UseFormReturn<IContact>;
  submitQuestionForm: (formData: IContact) => void;
}

const PriceCardForm: React.FC<IProps> = ({
  useFormInstance,
  submitQuestionForm,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormInstance;

  return (
    <form
      className="flex flex-col justify-between md:flex-row space-y-6 md:space-y-0 items-center text-center max-w-[612px] w-full"
      onSubmit={handleSubmit(submitQuestionForm)}
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
            className="max-w-[250px] text-2xl text-black"
            wrapperClassName="text-center"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
          />
        )}
      />
      <Button className="w-fit" type="submit">
        <FormattedMessage id="BUTTON.SEND_QUESTION" />
      </Button>
    </form>
  );
};

export default PriceCardForm;
