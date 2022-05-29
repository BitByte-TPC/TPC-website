import { TextField } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { FieldHookConfig, useField } from "formik";
import React from "react";

export const useStyles = makeStyles(() =>
  createStyles({
    cssLabel: {
      color: "#ededed",
    },

    cssOutlinedInput: {
      "&$cssFocused $notchedOutline": {
        borderColor: `#ededed !important`,
      },
      color: "#ededed",
    },

    cssFocused: {
      color: "#ededed",
    },

    notchedOutline: {
      borderWidth: "1px",
      borderColor: "#ededed !important",
    },
  })
);

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
  const classes = useStyles();
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
