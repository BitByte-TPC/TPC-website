import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MoreOptionsButton from "../../Buttons/MoreOptionsButton";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "2vh",
      minHeight: "20vh",
      width: "90vw",
      background: "#ffd166",
      position: "relative",
    },
    title: {
      fontSize: "1.2rem",
      color: "#3650C7",
      fontWeight: "bold",
      marginBottom: "1vh",
    },
    lang: {
      opacity: 0.5,
    },
    body: {
      marginBottom: "1vh",
      color: "black",
    },
    more: {
      position: "absolute",
      top: 2,
      right: 2,
    },
  })
);

// interface MeetingCardProps {}

const PollCard: React.FC = ({}) => {
  const classes = useStyles();
  // const [registerState, setRegisterState] = useState(0);
  const [option, setOption] = React.useState<string | null>(null);
  const [polled, setPolled] = React.useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption((event.target as HTMLInputElement).value);
    setPolled(true);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>BitByte</Typography>
        <FormControl component="fieldset">
          <Typography className={classes.body}>
            What do you guys want next?
          </Typography>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={option}
            onChange={handleChange}
          >
            <FormControlLabel
              disabled={polled}
              value="female"
              color="inherit"
              control={<Radio />}
              label="Girlfriend"
            />
            <FormControlLabel
              disabled={polled}
              color="default"
              value="webdev"
              control={<Radio />}
              label="Coding"
            />
            <FormControlLabel
              disabled={polled}
              value="ml"
              control={<Radio />}
              label="10 CPI"
            />
          </RadioGroup>
        </FormControl>

        <MoreOptionsButton formType={1} className={classes.more} />
      </CardContent>
    </Card>
  );
};

export default PollCard;
