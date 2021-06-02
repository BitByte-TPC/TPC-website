import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MeetingForm from "./meetingStuff/MeetingForm";
import PollForm from "./pollStuff/PollForm";
import { meetingType, pollType } from "./MeetingTabs";

interface MenuOptionsProps {
  meetingData?: meetingType;
  pollData?: pollType;
  open: boolean;
  type: number;
  close: () => void;
  parent: HTMLElement | null;
}
const MenuOptions: React.FC<MenuOptionsProps> = ({
  type,
  meetingData,
  pollData,
  open,
  close,
  parent,
}) => {
  const handleClick = () => {
    close();
  };
  const [formOpen, setFormOpen] = React.useState(false);

  const forms = [
    <MeetingForm
      initialVal={meetingData}
      open={formOpen}
      close={() => setFormOpen(false)}
    />,
    <PollForm
      initialVal={pollData}
      open={formOpen}
      close={() => setFormOpen(false)}
    />,
  ];

  return (
    <div>
      <Menu
        id="option-menu"
        anchorEl={parent}
        keepMounted
        open={open}
        onClose={close}
      >
        <MenuItem onClick={() => setFormOpen(true)}>Edit</MenuItem>
        <MenuItem onClick={handleClick}>Delete</MenuItem>
        {type === 0 ? (
          <MenuItem onClick={handleClick}>Registers</MenuItem>
        ) : null}
      </Menu>
      {forms[type]}
    </div>
  );
};

export default MenuOptions;
