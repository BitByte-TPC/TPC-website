import React, { useState } from "react";
import { Box, IconButton, Modal } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, Fullscreen } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";

interface CarouselInterface {
  images: Array<string>;
  onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "relative",
    width: "100%",
    aspectRatio: "16/10",
    height: "auto",
    overflow: "hidden",
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  paginationContainer: {
    zIndex: 1,
    display: "flex",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "absolute",
    bottom: 0,
    width: "fit-content",
    backdropFilter: "blur(5px)",
    backgroundColor: "#afdbdd3b",
  },
  dot: {
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: "50%",
    background: "#ffffff9e",
    margin: theme.spacing(0, 0.5),
    transition: "background 0.3s ease",
    "&:hover": {
      background: "white",
    },
  },
  activeDot: {
    background: "cyan",
  },
  iconButton: {
    width: theme.spacing(0.1),
    height: theme.spacing(0.1),
    background: "transparent",
    borderRadius: "50%",
    margin: theme.spacing(0, 1.3),
    transition: "background 0.3s ease",
    color: "white",
    "&:hover": {
      color: "cyan",
    },
  },
  title: {
    fontSize: "1rem",
    color: "white",
    textAlign: "center",
    fontFamily: "monospace",
    marginBottom: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "93vw",
    },
    aspectRatio: "16/9",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 20,
  },
  topButtons: {
    position: "absolute",
    top: 10,
    color: "white",
    zIndex: 100,
    background: "#afdbdd3b",
    backdropFilter: "blur(3px)",
  },
}));

const Carousel: React.FC<CarouselInterface> = ({ images, onClose }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const carouselComponent = (
    <div className={classes.root}>
      {!open && (
        <IconButton
          onClick={onClose}
          className={classes.topButtons}
          style={{
            left: 10,
          }}
        >
          <ArrowBack fontSize="small" style={{ fontWeight: "bolder" }} />
        </IconButton>
      )}
      {!open && (
        <IconButton
          onClick={handleOpen}
          className={classes.topButtons}
          style={{
            right: 10,
          }}
        >
          <Fullscreen fontSize="small" style={{ fontWeight: "bolder" }} />
        </IconButton>
      )}
      <Box className={classes.imageContainer}>
        <img
          style={open ? { borderRadius: 20 } : {}}
          className={classes.image}
          src={`/webix.iiitdmj.ac.in/images/events/${images[currentIndex]}`}
          alt={`Image ${currentIndex + 1}`}
        />
      </Box>

      <Box className={classes.paginationContainer}>
        <IconButton onClick={handlePrev} className={classes.iconButton}>
          <ArrowBackIos style={{ fontSize: "15px" }} />
        </IconButton>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${classes.dot} ${
              index === currentIndex ? classes.activeDot : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
        <IconButton onClick={handleNext} className={classes.iconButton}>
          <ArrowForwardIos style={{ fontSize: "15px" }} />
        </IconButton>
      </Box>
    </div>
  );

  return (
    <>
      {carouselComponent}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={open ? { border: "3px solid white", borderRadius: 20 } : {}}
          className={classes.modalContainer}
        >
          {carouselComponent}
        </Box>
      </Modal>
    </>
  );
};

export default Carousel;
