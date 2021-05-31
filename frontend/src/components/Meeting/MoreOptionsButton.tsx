import { IconButton, IconButtonProps } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import React from "react";
import MenuOptions from "./MenuOptions";

type MoreOptionsInterface = {
  formType: number;
} & IconButtonProps;
const MoreOptionsButton: React.FC<MoreOptionsInterface> = ({
  formType,
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
        type={formType}
        parent={someRef.current}
        close={handleClose}
        open={menuOpen}
      />
    </>
  );
};

export default MoreOptionsButton;
