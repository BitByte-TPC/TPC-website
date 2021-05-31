import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MoreOptionsButton from "../MoreOptionsButton";
import { pollType } from "../MeetingTabs";

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

interface PollCardProps {
  pollData: pollType;
  isAdmin: boolean;
}

const PollCard: React.FC<PollCardProps> = ({ pollData, isAdmin }) => {
  const classes = useStyles();
  const [option, setOption] = React.useState<string | null>(null);
  const [polled, setPolled] = React.useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption((event.target as HTMLInputElement).value);
    setPolled(true);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>{pollData.club}</Typography>
        <FormControl component="fieldset">
          <Typography className={classes.body}>{pollData.question}</Typography>
          <RadioGroup
            aria-label="pollOptions"
            name="pollOptions"
            value={option}
            onChange={handleChange}
          >
            {pollData.options.map((e, key) => (
              <FormControlLabel
                key={key}
                disabled={polled}
                value={e.name}
                color="inherit"
                control={<Radio />}
                label={e.name}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {isAdmin ? (
          <MoreOptionsButton formType={1} className={classes.more} />
        ) : null}
      </CardContent>
    </Card>
  );
};

export default PollCard;
