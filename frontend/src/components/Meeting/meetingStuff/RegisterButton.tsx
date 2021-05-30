import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "15vh",
      display: "flex",
      justifyContent: "center",
      background: "none",
      marginTop: "4vh",
      [theme.breakpoints.down("xs")]: {
        marginTop: "0",
        marginRight: "2vh",
      },
    },
    registered: {
      "&$disabled": {
        borderColor: "green",
        color: "green",
      },
    },
    disabled: {},
  })
);

type RegisterButtonProps = {
  btnState: number;
} & ButtonProps;

const RegisterButton: React.FC<RegisterButtonProps> = ({
  btnState,
  ...props
}) => {
  const classes = useStyles();
  const states = [
    {
      content: "Register",
      disabled: false,
      rootClass: classes.root,
    },
    {
      content: "Registered",
      disabled: true,
      rootClass: `${classes.root} ${classes.registered}`,
    },
    {
      content: "Register",
      disabled: true,
      rootClass: classes.root,
    },
  ];
  return (
    <Button
      variant="outlined"
      disabled={states[btnState].disabled}
      classes={{
        root: states[btnState].rootClass,
        disabled: classes.disabled,
      }}
      {...props}
    >
      {states[btnState].content}
    </Button>
  );
};

export default RegisterButton;
