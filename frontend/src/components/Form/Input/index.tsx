import clsx from "clsx";
import { enqueueSnackbar } from "notistack";
import InputMask from "react-input-mask";
import React, { useEffect } from "react";

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  wrapperClassName?: string;
  className?: string;
  error?: boolean;
  mask?: string;
  maskChar?: string;
  helperText?: string;
  textarea?: boolean;
}

const Input: React.FC<IProps> = ({
  wrapperClassName,
  className,
  error,
  mask,
  maskChar,
  helperText,
  textarea,
  ...props
}) => {
  useEffect(() => {
    if (error && helperText) enqueueSnackbar(helperText, { variant: "error" });
  }, [error]);

  return (
    <div className={wrapperClassName}>
      {!textarea ? (
        <InputMask
          mask={mask}
          maskChar={maskChar}
          className={clsx(
            "w-full rounded-lg border shadow-[#3950fe4d] py-[12px] px-4 outline-none active:shadow focus:shadow",
            {
              "text-red-500": error,
            },
            className
          )}
          {...props}
        />
      ) : (
        <textarea
          className={clsx(
            "w-full max-h-64 min-h-20 border text-[14px] mobile:text-[16px] shadow-[#3950fe4d] outline-none py-[12px] px-4 rounded-lg active:shadow focus:shadow",
            {
              "text-red-500": error,
            },
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
