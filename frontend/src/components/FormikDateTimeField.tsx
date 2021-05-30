import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { FieldHookConfig, useField, useFormikContext } from "formik";
import React from "react";

type FormikDateTimeFieldProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
} & FieldHookConfig<string>;

const FormikDateTimeField: React.FC<FormikDateTimeFieldProps> = ({
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [field, meta] = useField<any>(props);
  const { setFieldValue } = useFormikContext();
  const errorText = meta.error && meta.touched ? meta.error : "";
  // const obj = {
  //   label,
  //   type,
  // };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container direction="column" justify="center">
        <KeyboardDatePicker
          {...field}
          margin="normal"
          id="date-picker-dialog"
          label="Date"
          format="MM/dd/yyyy"
          helperText={errorText}
          error={!!errorText}
          onChange={(val) => setFieldValue(field.name, val)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          {...field}
          margin="normal"
          id="time-picker"
          label="Time"
          helperText={errorText}
          onChange={(val) => setFieldValue(field.name, val)}
          error={!!errorText}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default FormikDateTimeField;
