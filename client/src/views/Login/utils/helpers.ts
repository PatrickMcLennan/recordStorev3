import { FormContextValues, OnSubmit } from "react-hook-form";

export const onSubmit: OnSubmit<Record<string, any>> = (
  values: FormContextValues<Record<string, any>>
) => {
  return values;
};
