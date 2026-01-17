import { useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { DeleteIcon } from "./ConfirmDeleteDialog";
import { EditDialog } from "./EditDialog";
import type { Todo } from "./TodoContainer";

type Props = {
  todo: Todo;
  toggleFav: (id: string) => void;
  editTodo: (id: string, newTtitle: string) => void;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

const TodoItem = ({
  todo,
  toggleFav,
  editTodo,
  deleteTodo,
  toggleDone,
}: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const expandText = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className={`todo-item  ${todo.isDone ? "done" : ""} `}>
      <input
        type="checkbox"
        checked={todo.isDone}
        className="w-4 h-4 mr-4 bg-primary text-primary focus:primary accent-primary"
        onChange={() => toggleDone(todo.id)}
      />
      <div
        className={`todoTitle ${isExpanded ? "" : "ellipsed"}`}
        onClick={expandText}
        dir="auto"
      >
        {todo.title}
      </div>
      <div
        className="text-primary w-4 h-4 mr-4"
        onClick={() => toggleFav(todo.id)}
      >
        {todo.isFavorite ? (
          <MdOutlineFavorite size={18} />
        ) : (
          <MdFavoriteBorder size={18} />
        )}
      </div>
      <EditDialog id={todo.id} title={todo.title} editTodo={editTodo} />
      <DeleteIcon deleteTodo={() => deleteTodo(todo.id)} />
    </div>
  );
};

export default TodoItem;
