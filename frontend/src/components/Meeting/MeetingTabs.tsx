/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import MeetingCard from "./meetingStuff/MeetingCard";
import "./MeetingTabs.css";
import PollCard from "./pollStuff/PollCard";
import CreateButton from "./CreateButton";
import useUser from "src/customHooks/useUser";
import useMeetingData from "src/customHooks/useMeetingData";
import usePollData from "src/customHooks/usePollData";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.cardContainer}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
  },
  tabbar: {
    color: "white",
    background: "rgba(0, 0, 0, 0.5)",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  },
}));

type clubType = { authority: "admin" | "member"; _id: string; name: string };
export type pollType = {
  voter: string[];
  _id: string;
  question: string;
  club: string;
  createdAt: string;
  updatedAt: string;
  options: {
    votes: number;
    _id: string;
    name: string;
  }[];
};
export type meetingType = {
  _id: string;
  title: string;
  club: string;
  datetime: string;
  description: string;
  registered: {
    userId: number;
    _id: string;
    name: string;
    email: string;
  }[];
};

// Returns an array of all clubs in which he is admin
const getAdminClubs = (arr: clubType[]) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (e.authority === "admin") {
      res.push(e.name);
    }
  }
  return res;
};

const MeetingTabs: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { userData } = useUser();
  const { meetingData } = useMeetingData();
  const { pollData } = usePollData();
  const [meetings, setMeetings] = useState<meetingType[] | undefined>();
  const [polls, setPolls] = useState<pollType[] | undefined>();

  const [adminOfClubs, setAdminsOfClubs] = React.useState<string[]>([]);

  useEffect(() => {
    if (userData && userData.done)
      setAdminsOfClubs(getAdminClubs(userData.data.clubs));
    if (meetingData) setMeetings(meetingData.data);
    if (pollData) setPolls(pollData.data);
  }, [userData, meetingData, pollData]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  if (!adminOfClubs || !meetings || !polls) {
    return <div>Loading..</div>;
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.tabbar} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Events" {...a11yProps(0)} />
          <Tab label="Polls" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {meetings!.map((e, key) => (
            <MeetingCard
              key={key}
              meetingData={e}
              isAdmin={adminOfClubs.includes(e.club)}
            />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {polls!.map((e, key) => (
            <PollCard
              key={key}
              pollData={e}
              isAdmin={adminOfClubs.includes(e.club)}
            />
          ))}
        </TabPanel>
      </SwipeableViews>
      {adminOfClubs.length > 0 ? <CreateButton formType={value} /> : null}
    </div>
  );
};
export default MeetingTabs;
