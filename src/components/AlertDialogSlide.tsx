import { List, ListItemButton, ListItemText } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import React from "react";
import { exportTodos } from "../utils/exportData";
import type { Todo } from "./TodoContainer";

interface DialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  todos: Todo[];
  //   children: ReactNode;
}

export default function AlertDialogSlide({
  isOpen,
  onClose,
  todos,
}: DialogModalProps) {
  return (
    <div>
      <React.Fragment>
        <Dialog
          open={isOpen}
          onClose={onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="option-dialog"
          fullWidth
          maxWidth={"sm"}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#333",
              borderRadius: "12px",
              color: "white",
              padding: "30px",
            },
          }}
        >
          <List>
            <ListItemButton
              sx={{
                marginBottom: "20px",
              }}
              onClick={() => exportTodos(todos)}
            >
              <ListItemText
                primary="Export"
                //   secondary="Store all your tasks"
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                primary="What's new"
                // secondary="New features added"
              />
            </ListItemButton>
          </List>
          <DialogActions></DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
