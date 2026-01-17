import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";

import logo from "../assets/FaseelaLogoCropped.png";
import { exportTodos } from "../utils/exportTodos";
import { importTodosFromFile } from "../utils/importTodos";
import HeaderMenu from "./HeaderMenu";
import SettingsDialog from "./SettingsDialog";
import type { Todo } from "./TodoContainer";
import AlertDialogSlide from "./WhatsNewDialog";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Header = ({ todos, setTodos }: Props) => {
  // Options Menue
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  // What's new dialog
  const [isWhatsNewDialogOpen, setIsWhatsNewDialogOpen] = useState(false);

  // Setings dialog
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);

  // Open and close whats new dialog
  const openNewsDialog = () => setIsWhatsNewDialogOpen(true);
  const closeNewsDialog = () => setIsWhatsNewDialogOpen(false);

  // Open and close settings dialog
  const openSettings = () => setIsSettingsDialogOpen(true);
  const closeSettingsDialog = () => setIsSettingsDialogOpen(false);
  return (
    <>
      <div className="header my-4">
        <img className="w-36 object-contain" src={logo} alt="Logo" />
        <div className="options">
          <button className="export-btn" onClick={() => exportTodos(todos)}>
            Export
          </button>
          <button
            className="export-btn"
            onClick={() => document.getElementById("import-todos")?.click()}
          >
            Import
          </button>
          <h5 className="text-red-500">What's new</h5>
        </div>
        <div className="menu" onClick={handleOpen}>
          <RiArrowDownSFill
            size={30}
            className={`text-primary arrow-down-icon ${
              anchorEl ? "icon-opened" : ""
            }`}
          />
        </div>
        <input
          type="file"
          accept="application/json"
          hidden
          id="import-todos"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            try {
              const importedTodos = await importTodosFromFile(file);
              setTodos(importedTodos);
            } catch (err) {
              alert(`Invalid todo file ${err}`);
            }

            e.target.value = "";
          }}
        />
      </div>
      <HeaderMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        openSettings={() => {
          openSettings();
        }}
        onExport={() => exportTodos(todos)}
        onImport={() => document.getElementById("import-todos")?.click()}
        onWhatsNew={() => {
          openNewsDialog();
        }}
      />
      <AlertDialogSlide
        isOpen={isWhatsNewDialogOpen}
        onClose={closeNewsDialog}
      />
      <SettingsDialog
        isOpen={isSettingsDialogOpen}
        onClose={closeSettingsDialog}
      />
      {/* <AppVersions></AppVersions> */}
    </>
  );
};

export default Header;
