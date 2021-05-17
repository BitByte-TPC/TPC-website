import React from "react";
import { Formik, Form } from "formik";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: {
      marginBottom: "2vh",
      width: "80%",
    },
    btn: {
      background: "var(--golden)",
      "&:hover": {
        background: "var(--dark-golden)",
      },
    },
  })
);

const Signup: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form className={classes.root} noValidate autoComplete="off">
            <TextField
              name="username"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Name"
              className={classes.input}
            />
            <TextField
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email"
              className={classes.input}
            />
            <TextField
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
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
    </div>
  );
};

export default Signup;
