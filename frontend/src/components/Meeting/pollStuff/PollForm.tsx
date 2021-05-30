import { Button, Dialog, DialogContent, Theme } from "@material-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import FormikTextField from "../../FormikTextField";
import * as yup from "yup";
import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "2vh",
    },
    input: {
      marginBottom: "2vh",
      width: "60vh",
      [theme.breakpoints.down("sm")]: {
        width: "70vw",
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
});

interface PollFormProps {
  open: boolean;
  close: () => void;
}

const PollForm: React.FC<PollFormProps> = (props) => {
  const { close, open } = props;
  const classes = useStyles();

  return (
    <Dialog aria-labelledby="poll-dialog" open={open}>
      <DialogContent>
        <Formik
          initialValues={{
            question: "",
          }}
          validationSchema={validSchema}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            console.log(data);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={classes.root} noValidate autoComplete="off">
              <FormikTextField
                label="Question"
                className={classes.input}
                name="question"
              />
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
