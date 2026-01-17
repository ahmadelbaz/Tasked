import { appVersion } from "@/config/consts";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SettingsIcon } from "lucide-react";
import { MdFileDownload, MdFileUpload, MdNewReleases } from "react-icons/md";

type Props = {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  openSettings: () => void;
  onExport: () => void;
  onImport: () => void;
  onWhatsNew: () => void;
};

const HeaderMenu = ({
  anchorEl,
  handleClose,
  openSettings,
  onExport,
  onImport,
  onWhatsNew,
}: Props) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "center", vertical: "center" }}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            minWidth: 180,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.12)",
            backgroundColor: "#464646ff",
            color: "white",
          },
        },
      }}
    >
      <MenuItem
        onClick={() => {
          handleClose();
          openSettings();
        }}
      >
        <SettingsIcon style={{ marginRight: 8 }} size={16} />
        Settings
      </MenuItem>

      <MenuItem
        onClick={() => {
          handleClose();
          onExport();
        }}
      >
        <MdFileDownload style={{ marginRight: 8 }} />
        Export Todos
      </MenuItem>

      <MenuItem
        onClick={() => {
          handleClose();
          onImport();
        }}
      >
        <MdFileUpload style={{ marginRight: 8 }} />
        Import Todos
      </MenuItem>

      <Divider />

      <MenuItem
        onClick={() => {
          handleClose();
          onWhatsNew();
        }}
      >
        <MdNewReleases style={{ marginRight: 8 }} />
        What's New
      </MenuItem>

      <MenuItem disabled sx={{ fontSize: 12, opacity: 0.6 }}>
        v{`${appVersion}`}
      </MenuItem>
    </Menu>
  );
};

export default HeaderMenu;
