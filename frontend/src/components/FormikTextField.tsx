import { TextField } from "@material-ui/core";
import { FieldHookConfig, useField } from "formik";
import React from "react";
import { useSignupLoginStyles } from "./RegistrationForm/signupLoginStyle";

type FormikTextFieldProps = {
  className: string;
  label: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
} & FieldHookConfig<string>;

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  className,
  label,
  type,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const classes = useSignupLoginStyles();
  const [field, meta] = useField<string>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const obj = {
    className,
    label,
    type,
  };
  return (
    <TextField
      {...obj}
      {...field}
      helperText={errorText}
      error={!!errorText}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      variant="outlined"
    />
  );
};

export default FormikTextField;
