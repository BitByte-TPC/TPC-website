import { IconButton, IconButtonProps } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import React from "react";

type MoreOptionsInterface = {
  // className?: string;
} & IconButtonProps;
const MoreOptions: React.FC<MoreOptionsInterface> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <MoreHoriz />
    </IconButton>
  );
};

export default MoreOptions;
