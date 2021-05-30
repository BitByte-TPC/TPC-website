import { Button, Dialog, DialogContent, Theme } from "@material-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import FormikTextField from "../../FormikTextField";
import * as yup from "yup";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import FormikDateTimeField from "../../FormikDateTimeField";

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
  title: yup.string().required().min(3).max(64),
  description: yup.string().required().min(3),
  club: yup.string().required().min(3),
  datetime: yup.date().required(),
});

interface MeetingFormProps {
  open: boolean;
  close: () => void;
}

const MeetingForm: React.FC<MeetingFormProps> = (props) => {
  const { close, open } = props;
  const classes = useStyles();

  return (
    <Dialog aria-labelledby="meeting-dialog" open={open}>
      <DialogContent>
        <Formik
          initialValues={{
            title: "",
            description: "",
            club: "",
            datetime: new Date("2021-08-18T20:11:54"),
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
                label="Title"
                className={classes.input}
                name="title"
              />
              <FormikTextField
                name="description"
                label="Description"
                className={classes.input}
              />
              <FormikTextField
                name="club"
                label="Club Name"
                className={classes.input}
              />
              <FormikDateTimeField name="datetime" />
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

export default MeetingForm;
