import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";

import { exportTodos } from "../utils/exportTodos";
import { importTodosFromFile } from "../utils/importTodos";
import HeaderMenu from "./HeaderMenu";
import type { Todo } from "./TodoContainer";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Header = ({ todos, setTodos }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <div className="header">
        <h3>Tasked</h3>
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
          <h5>What's new</h5>
        </div>
        <div className="menu" onClick={handleOpen}>
          <RiArrowDownSFill size={25} />
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
              alert("Invalid todo file");
            }

            e.target.value = "";
          }}
        />
      </div>
      <HeaderMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        onExport={() => exportTodos(todos)}
        onImport={() => document.getElementById("import-todos")?.click()}
        onWhatsNew={() => {}}
      />
      {/* <AlertDialogSlide
        isOpen={isDialogOpen}
        onClose={handleClose}
        todos={todos}
      /> */}
    </>
  );
};

export default Header;
