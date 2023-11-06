import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import DomainCard from "src/components/Cards/DomainCard";
import { teamList } from "../../pages/Domains/teamList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      fontFamily: "var(--heading-font)",
      fontSize: "4rem",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.9)",
      textShadow: "-4px 4px 4px #10ABC2",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    subHeading: {
      color: "rgba(255, 255, 255, 0.75)",
      fontFamily: "monospace",

      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
        padding: "0 5vw",
      },
    },
    title: {
      marginBottom: "5vh",
      marginTop: "8vh",
      fontFamily: "var(--heading-font)",
      fontSize: "2.8rem",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.9)",
      textShadow: "-4px 4px 4px #10ABC2",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    subtitle: {
      marginBottom: "5vh",
      marginTop: "5vh",
      fontFamily: "var(--heading-font)",
      fontSize: "2rem",
      color: "rgba(255, 255, 255, 0.9)",
      textShadow: "-4px 4px 4px #10ABC2",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    flexbox: {
      width: "90vw",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  })
);

interface TeamcardProps {
  domain: string;
  batch: number;
}

const TeamCard: React.FC<TeamcardProps> = ({ domain, batch }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.subtitle} align="center">
        {batch} Batch
      </Typography>
      <div className={classes.flexbox}>
        {teamList.map((memberData, i) => {
          return memberData.team === domain && memberData.batch === batch ? (
            <DomainCard
              key={i}
              {...{
                ...memberData,
                team:
                  domain === "cp"
                    ? "Competitive Programmer"
                    : domain === "dev"
                    ? "Developer"
                    : "Designer",
              }}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default TeamCard;
