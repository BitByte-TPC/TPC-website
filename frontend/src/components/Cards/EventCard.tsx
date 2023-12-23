import React, { useState } from "react";
import Carousel from "../eventsPage/Carousel";
import { Launch, PhotoLibrary } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  IconButton,
  Zoom,
} from "@material-ui/core";
import theme from "src/theme/theme";

interface EventCardProps {
  title: string;
  subtitle?: string;
  thumb: string;
  web?: string;
  date?: string;
  images?: Array<string>;
  description?: string;
  priority: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkContainer: {
      "&:hover": {
        background: "var(--my-dcyan)",
      },
      marginTop: ".8rem",
      width: "5rem",
      paddingInline: ".6rem",
      background: "var(--translucent-backgound)",
      borderRadius: "10px",
    },
    eventLink: {
      paddingX: "1rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: "white",
      textDecorationLine: "underline",
      fontSize: "0.8rem",
    },
    linkText: {
      marginLeft: "8px",
    },
    cardContainer: {
      boxShadow: "0px 0px 14px 5px var(--my-dcyan)",
      borderRadius: 20,
      background: "transparent",
      height: "100%",
      color: "white",
      border: "2px solid #00ffffde",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    },
    cardContent: {
      width: "95%",
      borderTop: "2px solid var(--my-lcyan)",
      flexGrow: 1,
      marginBottom: 2,
    },
    mediaContainer: {
      position: "sticky",
      bottom: 0,
      width: "100%",
      height: "fit-content",
    },
    galleryButton: {
      position: "absolute",
      left: "calc(100% - 4rem)",
      color: "white",
      transition: theme.transitions.create(["transform", "opacity"], {
        duration: theme.transitions.duration.short,
      }),
      "&:hover": {
        background: "var(--my-dcyan)",
      },
    },
    buttonHidden: {
      transform: "scale(0)",
      opacity: 1,
    },
    date: {
      fontFamily: "monospace",
      color: "var(--my-lcyan)",
      marginTop: "1rem",
      marginBottom: ".5rem",
    },
    description: {
      marginTop: ".5rem",
      fontFamily: "monospace",
      borderLeft: "3px solid var(--my-dcyan)",
      paddingLeft: ".4rem",
    },
  })
);

const EventCard: React.FC<EventCardProps> = ({
  title,
  subtitle,
  thumb,
  web,
  date,
  images,
  description,
}) => {
  const classes = useStyles();

  const [showCarousel, setShowCarousel] = useState(false);

  const toggleView = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <Card className={classes.cardContainer}>
      {images && showCarousel ? (
        <Carousel images={images} onClose={toggleView} />
      ) : (
        <CardMedia
          component="img"
          style={{ aspectRatio: "16/10" }}
          image={`/webix.iiitdmj.ac.in/images/events/${thumb}`}
          alt="Thumbnail"
        />
      )}

      <CardContent className={classes.cardContent}>
        {images && !showCarousel && (
          <Zoom in={true} timeout={theme.transitions.duration.short}>
            <IconButton
              className={`${classes.buttonHidden} ${classes.galleryButton}`}
              onClick={toggleView}
            >
              <PhotoLibrary />
            </IconButton>
          </Zoom>
        )}

        <Typography
          variant="h4"
          component="div"
          style={{ fontWeight: "bolder" }}
        >
          {title}
        </Typography>
        {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
        {date && (
          <Typography
            variant="body1"
            component="div"
            gutterBottom
            className={classes.date}
          >
            {date}
          </Typography>
        )}
        {description && (
          <Typography
            variant="body2"
            component="div"
            className={classes.description}
          >
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions style={{ width: "95%" }}>
        {web ? (
          <div className={classes.linkContainer}>
            <a className={classes.eventLink} href={web} target="_blank">
              <Launch fontSize="small" />
              <p className={classes.linkText}>Website</p>
            </a>
          </div>
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  );
};

export default EventCard;
