import React from "react";
import { Formik, Form } from "formik";
import { Button, Link, Typography } from "@material-ui/core";
import { useSignupLoginStyles } from "./signupLoginStyle";
import FormikTextField from "../FormikTextField";
import * as yup from "yup";
import { fetchRegister } from "../../utils/auth/fetchRegister";
import { useHistory } from "react-router";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import useTokenStore from "src/store/tokenStore";

interface SignupProps {
  // setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const validSchema = yup.object({
  username: yup.string().required().min(2),
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
});

const Signup: React.FC<SignupProps> = ({ setPage }) => {
  const history = useHistory();
  const classes = useSignupLoginStyles();
  const setToken = useTokenStore((state) => state.setToken);
  const [openError, setOpenError] = React.useState(false);
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validSchema}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const res = await fetchRegister(data, setToken);
          if (!res.done) {
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
              name="username"
              label="Name"
              className={classes.input}
            />
            <FormikTextField
              name="email"
              label="Email"
              className={classes.input}
            />
            <FormikTextField
              name="password"
              type="password"
              label="Password"
              className={classes.input}
            />
            <Button
              disabled={isSubmitting}
              color="inherit"
              variant="contained"
              type="submit"
              className={classes.btn}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Typography align="center" className={classes.footer}>
        Already have an account?{" "}
        <Link className={classes.link} onClick={() => setPage(0)}>
          Login
        </Link>
      </Typography>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Email already taken
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
