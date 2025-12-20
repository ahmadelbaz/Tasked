import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { exportTodos } from "../utils/exportData";
import AlertDialogSlide from "./AlertDialogSlide";
import type { Todo } from "./TodoContainer";

type Props = {
  todos: Todo[];
};

const Header = ({ todos }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = () => setIsDialogOpen(true);
  const handleClose = () => setIsDialogOpen(false);
  return (
    <>
      <div className="header">
        <h3>Tasked</h3>
        <div className="options">
          <button className="export-btn" onClick={() => exportTodos(todos)}>
            Export
          </button>
          <h5>What's new</h5>
        </div>
        <div className="menu" onClick={handleOpen}>
          <RiMenuFill />
        </div>
      </div>
      <AlertDialogSlide
        isOpen={isDialogOpen}
        onClose={handleClose}
        todos={todos}
      />
    </>
  );
};

export default Header;
