import { appVersion } from "@/config/consts";
import { List, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import {
  MdFileDownload,
  MdFileUpload,
  MdLanguage,
  MdNewReleases,
  MdPalette,
  MdPhoneIphone,
  MdSave,
  MdTextFields,
} from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";

interface DialogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AlertDialogSlide({
  isOpen,
  onClose,
}: DialogModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      className="option-dialog"
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#333",
          borderRadius: "12px",
          color: "white",
          padding: "24px",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 600 }}>
        ✨ What’s New in Tasked
        <div style={{ fontSize: "14px", opacity: 0.7, marginTop: "4px" }}>
          Version {`${appVersion}`}
        </div>
      </DialogTitle>

      <List>
        <ListItem>
          <ListItemIcon className="whatsnew-icon">
            <MdSave />
          </ListItemIcon>
          <ListItemText primary="Todos are now stored locally to keep your data safe." />
        </ListItem>

        <ListItem>
          <ListItemIcon className="whatsnew-icon">
            <MdFileDownload />
          </ListItemIcon>
          <ListItemText primary="Export your todos to a file and save them anywhere." />
        </ListItem>

        <ListItem>
          <ListItemIcon className="whatsnew-icon">
            <MdFileUpload />
          </ListItemIcon>
          <ListItemText primary="Import previously saved todos back into the app." />
        </ListItem>

        <ListItem>
          <ListItemIcon className="whatsnew-icon">
            <MdPhoneIphone />
          </ListItemIcon>
          <ListItemText primary="The app is now fully responsive on all screen sizes." />
        </ListItem>

        <ListItem>
          <ListItemIcon className="whatsnew-icon">
            <MdLanguage />
          </ListItemIcon>
          <ListItemText primary="Improved text input & todos titles to support with automatic RTL/LTR detection for Arabic and English." />
        </ListItem>

        <ListItem>
          <ListItemIcon className="whatsnew-icon">
            <MdPalette />
          </ListItemIcon>
          <ListItemText primary="New UI improvements for a cleaner and smoother experience." />
        </ListItem>

        <ListItem>
          <ListItemIcon className="whatsnew-icon">
            <RiArrowDownSFill />
          </ListItemIcon>
          <ListItemText primary="A new options menu for quick access to features." />
        </ListItem>

        <ListItem>
          <ListItemIcon sx={{ color: "#ffb74d" }}>
            <MdTextFields />
          </ListItemIcon>
          <ListItemText primary="Long task titles are now truncated with ellipsis (…) and can be expanded with a click for better readability." />
        </ListItem>

        <ListItem>
          <ListItemIcon className="whatsnew-icon">
            <MdNewReleases />
          </ListItemIcon>
          <ListItemText primary="Introducing the What’s New section to track updates." />
        </ListItem>
      </List>

      <DialogActions sx={{ justifyContent: "center", marginTop: "16px" }}>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            backgroundColor: "#E7FE55",
            color: "#000",
            borderRadius: "18px",
            "&:hover": {
              backgroundColor: "#f1ff97ff",
            },
          }}
        >
          Got it
        </Button>
      </DialogActions>
    </Dialog>
  );
}
