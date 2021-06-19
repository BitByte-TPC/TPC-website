import { IconButton, IconButtonProps } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";

type BackButtonProps = {
  //
} & IconButtonProps;
const BackButton: React.FC<BackButtonProps> = ({ ...props }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <IconButton onClick={handleClick} {...props}>
        <ArrowBack />
      </IconButton>
    </>
  );
};

export default BackButton;
