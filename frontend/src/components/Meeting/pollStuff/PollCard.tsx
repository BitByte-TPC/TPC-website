import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MoreOptionsButton from "../MoreOptionsButton";
import { pollType } from "../MeetingTabs";
import { votePoll } from "src/utils/pollCalls";
import useTokenStore from "src/store/tokenStore";
import { server } from "src/store/global";
import { mutate } from "swr";

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
  userId: string;
}

const PollCard: React.FC<PollCardProps> = ({ pollData, isAdmin, userId }) => {
  const classes = useStyles();
  const accessToken = useTokenStore((state) => state.token);
  const [option, setOption] = React.useState<string | null>(null);
  const [polled, setPolled] = React.useState<boolean>(false);
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const res = await votePoll(
      (event.target as HTMLInputElement).value,
      accessToken,
      pollData._id
    );
    if (res.done) {
      setOption((event.target as HTMLInputElement).value);
      setPolled(true);
      mutate([`${server}/api/poll/get_all`, accessToken]);
    } else {
      console.log(res.err);
    }
  };
  React.useEffect(() => {
    for (let i = 0; i < pollData.voters.length; i++) {
      if (pollData.voters[i].userId === userId) {
        setOption(pollData.voters[i].optionId);
        setPolled(true);
      }
    }
  }, [pollData]);
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
                value={e._id}
                color="inherit"
                control={<Radio />}
                label={`${e.name} (${e.votes} votes)`}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {isAdmin ? (
          <MoreOptionsButton
            pollData={pollData}
            formType={1}
            className={classes.more}
          />
        ) : null}
      </CardContent>
    </Card>
  );
};

export default PollCard;
