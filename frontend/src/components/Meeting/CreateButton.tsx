import { IconButton, IconButtonProps } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MeetingForm from "./meetingStuff/MeetingForm";
import PollForm from "./pollStuff/PollForm";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: "rgba(255, 255, 255, 0.5)",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 3,
    },
  })
);

type CreateButtonProps = {
  formType: number;
} & IconButtonProps;
const CreateButton: React.FC<CreateButtonProps> = ({ formType, ...props }) => {
  const classes = useStyles();
  const [formOpen, setFormOpen] = React.useState(false);
  const forms = [
    <MeetingForm open={formOpen} close={() => setFormOpen(false)} />,
    <PollForm open={formOpen} close={() => setFormOpen(false)} />,
  ];
  return (
    <>
      <IconButton
        color="inherit"
        className={classes.root}
        onClick={() => setFormOpen(true)}
        {...props}
      >
        <Add />
      </IconButton>
      {forms[formType]}
    </>
  );
};

export default CreateButton;
