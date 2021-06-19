import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import useTokenStore from "src/store/tokenStore";
import { registerMeeting } from "src/utils/meetingCalls";
import { mutate } from "swr";
import { server } from "src/store/global";
import useYearStore from "src/store/yearStore";

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
  userId: string;
  btnState: number;
  meetingId: string;
} & ButtonProps;

const RegisterButton: React.FC<RegisterButtonProps> = ({
  userId,
  meetingId,
  btnState,
  ...props
}) => {
  const classes = useStyles();
  const year = useYearStore((state) => state.year);
  const accessToken = useTokenStore((state) => state.token);
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
  const handleClick = async () => {
    const res = await registerMeeting(userId, accessToken, meetingId);
    if (!res.done) {
      console.log(res.err);
    } else {
      mutate([`${server}/api/meeting/get_all?year=${year}`, accessToken]);
    }
  };
  return (
    <Button
      variant="outlined"
      onClick={handleClick}
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
