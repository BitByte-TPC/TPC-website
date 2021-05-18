import React from "react";
import { Formik, Form } from "formik";
import { Button, Link, Typography } from "@material-ui/core";
import { useSignupLoginStyles } from "./signupLoginStyle";
import FormikTextField from "./FormikTextField";
import * as yup from "yup";

interface SignupProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
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

const Signup: React.FC<SignupProps> = ({ setLogin }) => {
  const classes = useSignupLoginStyles();
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
          resetForm();
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
        Already have an account?
        <Link className={classes.link} onClick={() => setLogin(true)}>
          Login
        </Link>
      </Typography>
    </div>
  );
};

export default Signup;
