import { IconButton, IconButtonProps } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import React from "react";
import { meetingType, pollType } from "./MeetingTabs";
import MenuOptions from "./MenuOptions";

type MoreOptionsInterface = {
  formType: number;
  meetingData?: meetingType;
  pollData?: pollType;
} & IconButtonProps;
const MoreOptionsButton: React.FC<MoreOptionsInterface> = ({
  formType,
  meetingData,
  pollData,
  ...props
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const someRef = React.useRef(null);
  const handleClose = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <IconButton onClick={() => setMenuOpen(true)} {...props}>
        <MoreHoriz ref={someRef} />
      </IconButton>
      <MenuOptions
        meetingData={meetingData}
        pollData={pollData}
        type={formType}
        parent={someRef.current}
        close={handleClose}
        open={menuOpen}
      />
    </>
  );
};

export default MoreOptionsButton;
