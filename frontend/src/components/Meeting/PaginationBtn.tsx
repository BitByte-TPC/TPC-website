import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useYearStore from "src/store/yearStore";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: "white",
      borderColor: "#FFD166",
    },
  })
);

const PaginationBtn: React.FC = () => {
  const classes = useStyles();
  const year = useYearStore((state) => state.year);
  const nextYear = useYearStore((state) => state.nextYear);
  const prevYear = useYearStore((state) => state.prevYear);
  return (
    <ButtonGroup aria-label="button group">
      <Button
        disabled={year === 2021}
        className={classes.root}
        onClick={prevYear}
      >
        Prev
      </Button>
      <Button
        disabled={year === new Date().getFullYear()}
        className={classes.root}
        onClick={nextYear}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};
export default PaginationBtn;
