import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MeetingForm from "./meetingStuff/MeetingForm";
import PollForm from "./pollStuff/PollForm";

interface MenuOptionsProps {
  open: boolean;
  type: number;
  close: () => void;
  parent: HTMLElement | null;
}
const MenuOptions: React.FC<MenuOptionsProps> = ({
  type,
  open,
  close,
  parent,
}) => {
  const handleClick = () => {
    close();
  };
  const [formOpen, setFormOpen] = React.useState(false);

  const forms = [
    <MeetingForm open={formOpen} close={() => setFormOpen(false)} />,
    <PollForm open={formOpen} close={() => setFormOpen(false)} />,
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
      </Menu>
      {forms[type]}
    </div>
  );
};

export default MenuOptions;
