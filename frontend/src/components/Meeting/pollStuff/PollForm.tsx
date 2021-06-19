import {
  Button,
  Dialog,
  DialogContent,
  Snackbar,
  Theme,
} from "@material-ui/core";
import { Formik, Form, FieldArray } from "formik";
import React from "react";
import FormikTextField from "../../FormikTextField";
import * as yup from "yup";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { pollType } from "../MeetingTabs";
import { Alert } from "@material-ui/lab";
import { createPoll, updatePoll } from "src/utils/pollCalls";
import useTokenStore from "src/store/tokenStore";
import { mutate } from "swr";
import { server } from "src/store/global";
import useYearStore from "src/store/yearStore";

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
  club: yup.string().required("Club name is required").min(3).max(32),
  question: yup.string().required("Question cannot be empty").min(3).max(64),
  options: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .required("Option cannot be empty")
        .min(3, "Option cannot be empty")
        .max(32),
    })
  ),
});

interface PollFormProps {
  initialVal?: pollType;
  open: boolean;
  close: () => void;
}

const PollForm: React.FC<PollFormProps> = ({ close, open, initialVal }) => {
  const classes = useStyles();
  const accessToken = useTokenStore((state) => state.token);
  const year = useYearStore((state) => state.year);
  const [openError, setOpenError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("Permission Denied");

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  return (
    <Dialog aria-labelledby="poll-dialog" open={open}>
      <DialogContent>
        <Formik
          initialValues={{
            club: initialVal ? initialVal.club : "",
            question: initialVal ? initialVal.question : "",
            options: initialVal ? initialVal.options : [{ name: "" }],
          }}
          validationSchema={validSchema}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            if (data.options.length < 2 || data.options.length > 5) {
              setErrorText("Poll must have 2-5 options");
              setOpenError(true);
            } else {
              if (initialVal) {
                const res = await updatePoll(data, initialVal._id, accessToken);
                if (!res.done) {
                  setErrorText("Permission Denied");
                  setOpenError(true);
                } else {
                  mutate([
                    `${server}/api/poll/get_all?year=${year}`,
                    accessToken,
                  ]);
                  close();
                }
              } else {
                const res = await createPoll(data, accessToken);
                if (!res.done) {
                  setErrorText("Permission Denied");
                  setOpenError(true);
                } else {
                  mutate([
                    `${server}/api/poll/get_all?year=${year}`,
                    accessToken,
                  ]);
                  close();
                }
              }
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className={classes.root} noValidate autoComplete="off">
              <FormikTextField
                label="Club Name"
                className={classes.input}
                name="club"
              />
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
                            name={`options.${key}.name`}
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
                      <Button
                        onClick={() => arr.push({ name: "" })}
                        variant="outlined"
                      >
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
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorText}
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default PollForm;
