import axios from "axios";
import { IContact } from "../models/contact.model";
import { useMutation } from "@tanstack/react-query";

const sendEmail = async (data: IContact) => {
  return axios
    .post("http://localhost:3001/api/email", data)
    .then((res) => res.data);
};

export const useSendEmail = (onSuccess?: (data: any) => void, onError?: () => void) => {
  return useMutation(
    (data: IContact) => {
      return sendEmail(data);
    },
    {
      onSuccess: (data: any) => {
        if (onSuccess) onSuccess(data);
      },
      onError: () => {
        if (onError) onError();
      },
    }
  );
};
