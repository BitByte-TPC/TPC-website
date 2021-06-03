import {
  Button,
  Dialog,
  DialogContent,
  Snackbar,
  Theme,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import FormikTextField from "../../FormikTextField";
import * as yup from "yup";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import FormikDateTimeField from "../../FormikDateTimeField";
import { meetingType } from "../MeetingTabs";
import useTokenStore from "src/store/tokenStore";
import { createMeeting, updateMeeting } from "src/utils/meetingCalls";
import { mutate } from "swr";
import { server } from "src/store/global";
import { Alert } from "@material-ui/lab";
import useYearStore from "src/store/yearStore";

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
      [theme.breakpoints.down("xs")]: {
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
  datetime: yup.date().required().min(new Date(Date.now()), "Invalid Date"),
});

interface MeetingFormProps {
  open: boolean;
  close: () => void;
  initialVal?: meetingType;
}

const MeetingForm: React.FC<MeetingFormProps> = ({
  close,
  open,
  initialVal,
}) => {
  const classes = useStyles();
  const accessToken = useTokenStore((state) => state.token);
  const year = useYearStore((state) => state.year);
  const [openError, setOpenError] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };
  return (
    <Dialog aria-labelledby="meeting-dialog" open={open}>
      <DialogContent>
        <Formik
          initialValues={{
            title: initialVal ? initialVal.title : "",
            description: initialVal ? initialVal.description : "",
            club: initialVal ? initialVal.club : "",
            datetime: initialVal
              ? initialVal.datetime
              : new Date("2021-08-18T20:11:54"),
          }}
          validationSchema={validSchema}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            if (initialVal) {
              const res = await updateMeeting(
                data,
                initialVal._id,
                accessToken
              );
              if (res.done) {
                mutate([
                  `${server}/api/meeting/get_all?year=${year}`,
                  accessToken,
                ]);
                close();
              } else {
                console.log(res.err);
                setOpenError(true);
              }
            } else {
              const res = await createMeeting(data, accessToken);
              if (res.done) {
                mutate([
                  `${server}/api/meeting/get_all?year=${year}`,
                  accessToken,
                ]);
                close();
              } else {
                console.log(res.err);
                setOpenError(true);
              }
            }
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
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Permission Denied
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default MeetingForm;
