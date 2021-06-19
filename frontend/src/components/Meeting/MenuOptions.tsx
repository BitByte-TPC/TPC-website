/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MeetingForm from "./meetingStuff/MeetingForm";
import PollForm from "./pollStuff/PollForm";
import { meetingType, pollType } from "./MeetingTabs";
import { deletePoll } from "src/utils/pollCalls";
import useTokenStore from "src/store/tokenStore";
import { mutate } from "swr";
import { server } from "src/store/global";
import useYearStore from "src/store/yearStore";
import RegistersDialog from "./meetingStuff/Registers";

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
  const [formOpen, setFormOpen] = React.useState(false);
  const [registersOpen, setRegistersOpen] = React.useState(false);
  const accessToken = useTokenStore((state) => state.token);
  const year = useYearStore((state) => state.year);

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

  const handleDelete = async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const res = await deletePoll(pollData?._id!, pollData?.club!, accessToken);
    if (res.done) {
      mutate([`${server}/api/poll/get_all?year=${year}`, accessToken]);
      close();
    } else {
      console.log(res.err);
    }
  };

  const handleClick = () => {
    setRegistersOpen(true);
  };

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

        {type === 0 ? (
          <MenuItem onClick={handleClick}>Registers</MenuItem>
        ) : (
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        )}
      </Menu>
      {forms[type]}
      <RegistersDialog
        meetingData={meetingData}
        open={registersOpen}
        close={() => setRegistersOpen(false)}
      />
    </div>
  );
};

export default MenuOptions;
