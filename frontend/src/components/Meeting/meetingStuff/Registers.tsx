/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { Assignment } from "@material-ui/icons";
import React from "react";
import { meetingType } from "../MeetingTabs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "70vh",
      [theme.breakpoints.down("sm")]: {
        width: "60vw",
      },
    },
    btn: {
      background: "var(--golden)",
      padding: 2,
      color: "white",
      margin: "2vh",
      "&:hover": {
        background: "var(--dark-golden)",
      },
    },
  })
);

interface RegisterDialogProps {
  meetingData?: meetingType;
  open: boolean;
  close: () => void;
}
const RegistersDialog: React.FC<RegisterDialogProps> = ({
  meetingData,
  open,
  close,
}) => {
  const classes = useStyles();
  const copyToClipboard = () => {
    const arr = meetingData?.registered.map((e) => e.email);
    const data = arr?.join(" ");
    navigator.clipboard.writeText(data ? data : "");
  };
  return (
    <Dialog onClose={close} aria-labelledby="registers-title" open={open}>
      <DialogTitle id="registers-dialog-title">Registers</DialogTitle>
      <DialogContent className={classes.root} dividers>
        <List>
          {meetingData?.registered.map((e, key) => (
            <ListItem key={key}>
              <ListItemText primary={e.name} secondary={e.email} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Tooltip title="Copy emails to clipboard">
          <IconButton onClick={copyToClipboard} color="inherit">
            <Assignment />
          </IconButton>
        </Tooltip>
        <Button
          className={classes.btn}
          autoFocus
          onClick={close}
          color="inherit"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegistersDialog;
