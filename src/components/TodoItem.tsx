import { useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { DeleteIcon } from "./ConfirmDeleteDialog";
import type { Todo } from "./TodoContainer";

type Props = {
  todo: Todo;
  toggleFav: (id: string) => void;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

const TodoItem = ({ todo, toggleFav, deleteTodo, toggleDone }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const expandText = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className={`todo-item  ${todo.isDone ? "done" : ""} `}>
      <input
        type="checkbox"
        checked={todo.isDone}
        className="check-icon icon"
        onChange={() => toggleDone(todo.id)}
      />
      <div
        className={`todoTitle ${isExpanded ? "" : "ellipsed"}`}
        onClick={expandText}
        dir="auto"
      >
        {todo.title}
      </div>
      <div className="fav-icon icon" onClick={() => toggleFav(todo.id)}>
        {todo.isFavorite ? (
          <MdOutlineFavorite size={18} />
        ) : (
          <MdFavoriteBorder size={18} />
        )}
      </div>
      <DeleteIcon deleteTodo={() => deleteTodo(todo.id)} />
    </div>
  );
};

export default TodoItem;
