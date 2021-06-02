import { Button, Dialog, DialogContent, Theme } from "@material-ui/core";
import { Formik, Form, FieldArray } from "formik";
import React from "react";
import FormikTextField from "../../FormikTextField";
import * as yup from "yup";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { pollType } from "../MeetingTabs";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: {
      marginBottom: "2vh",
      width: "60vh",
      [theme.breakpoints.down("xs")]: {
        width: "70vw",
      },
    },
    optInput: {
      marginBottom: "2vh",
      width: "50vh",
      [theme.breakpoints.down("xs")]: {
        width: "60vw",
      },
    },
    optBtn: {
      width: "10vh",
      height: 56,
      [theme.breakpoints.down("xs")]: {
        width: "10vw",
      },
    },
    btn: {
      background: "var(--golden)",
      margin: "2vh",
      "&:hover": {
        background: "var(--dark-golden)",
      },
    },
    link: {
      cursor: "pointer",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
  })
);

const validSchema = yup.object({
  question: yup.string().required().min(3).max(64),
  options: yup
    .array()
    .of(yup.string().required().min(2).max(64))
    .required()
    .min(2, "Atleast two options required")
    .max(10),
});

interface PollFormProps {
  initialVal?: pollType;
  open: boolean;
  close: () => void;
}

const PollForm: React.FC<PollFormProps> = ({ close, open, initialVal }) => {
  const classes = useStyles();

  return (
    <Dialog aria-labelledby="poll-dialog" open={open}>
      <DialogContent>
        <Formik
          initialValues={{
            question: initialVal ? initialVal.question : "",
            options: initialVal ? initialVal.options : [""],
          }}
          validationSchema={validSchema}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            console.log(data);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className={classes.root} noValidate autoComplete="off">
              <FormikTextField
                label="Question"
                className={classes.input}
                name="question"
              />
              {initialVal ? null : (
                <FieldArray name="options">
                  {(arr) => (
                    <div className={classes.root}>
                      {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                      {values.options.map((_e: any, key: number) => (
                        <div key={key}>
                          <FormikTextField
                            label={`Option ${key + 1}`}
                            className={classes.optInput}
                            name={`options.${key}`}
                          />
                          <Button
                            className={classes.optBtn}
                            onClick={() => arr.remove(key)}
                            variant="outlined"
                          >
                            X
                          </Button>
                        </div>
                      ))}
                      <Button onClick={() => arr.push("")} variant="outlined">
                        Add
                      </Button>
                    </div>
                  )}
                </FieldArray>
              )}
              <div className={classes.footer}>
                <Button
                  disabled={isSubmitting}
                  color="inherit"
                  variant="contained"
                  onClick={close}
                  className={classes.btn}
                >
                  Cancel
                </Button>
                <Button
                  disabled={isSubmitting}
                  color="inherit"
                  variant="contained"
                  type="submit"
                  className={classes.btn}
                >
                  Done
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default PollForm;
