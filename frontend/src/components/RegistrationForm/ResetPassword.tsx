import React from "react";
import { Formik, Form } from "formik";
import { Button, Link, Typography } from "@material-ui/core";
import { useSignupLoginStyles } from "./signupLoginStyle";
import FormikTextField from "../FormikTextField";
import * as yup from "yup";
import { resetPassword } from "../../utils/auth/resetPassword";
import { useHistory } from "react-router";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface LoginProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const validSchema = yup.object({
  email: yup
    .string()
    .required()
    .max(64)
    .matches(/^[a-zA-Z0-9]+(@iiitdmj\.ac\.in)$/, "Invalid Email"),
  password: yup
    .string()
    .required()
    .min(6)
    .matches(/[0-9]/, "Password must include atleast 1 digit"),
  newPassword: yup
    .string()
    .required("Password is a required field")
    .min(6)
    .matches(/[0-9]/, "Password must include atleast 1 digit"),
});

const ResetPassword: React.FC<LoginProps> = ({ setPage }) => {
  const history = useHistory();
  const classes = useSignupLoginStyles();
  const [openError, setOpenError] = React.useState(false);
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          newPassword: "",
        }}
        validationSchema={validSchema}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const res = await resetPassword(data);
          if (!res.ok) {
            console.log("ERROR FROM BACKEND");
            setOpenError(true);
          } else {
            resetForm();
            history.push("/");
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.root} noValidate autoComplete="off">
            <FormikTextField
              label="Email"
              className={classes.input}
              name="email"
            />
            <FormikTextField
              name="password"
              label="Password"
              type="password"
              className={classes.input}
            />
            <FormikTextField
              name="newPassword"
              label="New Password"
              type="password"
              className={classes.input}
            />
            <Button
              disabled={isSubmitting}
              color="inherit"
              variant="contained"
              type="submit"
              className={classes.btn}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Typography align="center" className={classes.footer}>
        <Link className={classes.link} onClick={() => setPage(0)}>
          Back
        </Link>
      </Typography>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Invalid email or password
        </Alert>
      </Snackbar>
    </>
  );
};

export default ResetPassword;
