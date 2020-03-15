import React from "react";
import { toast, Toast, ToastOptions } from "react-toastify";

const toastOptions: ToastOptions = {
  closeButton: false,
  position: "bottom-right",
  hideProgressBar: true
};

toast.configure(toastOptions);

export const LoadingToast: Toast = (message: string) => toast(<div></div>);

export const SuccessToast: Toast = (message: string) => toast(<div></div>);

export const ErrorToast: Toast = (message: string) => toast(<div></div>);
