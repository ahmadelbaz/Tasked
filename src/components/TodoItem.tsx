import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import type { Todo } from "./TodoContainer";

type Props = {
  todo: Todo;
  toggleFav: (id: string) => void;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

const TodoItem = ({ todo, toggleFav, deleteTodo, toggleDone }: Props) => {
  //   const todoRef = useRef(null);
  //   useEffect(() => {
  //     if (todoRef.current) {
  //       if (todo.isDone) {
  //         console.log(typeof todoRef.current);
  //       }
  //     }
  //   }, [todo.isDone]);
  return (
    <div className={`todo-item  ${todo.isDone ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={todo.isDone}
        className="check-icon icon"
        onChange={() => toggleDone(todo.id)}
      />
      <div className="todoTitle">{todo.title}</div>
      <div className="fav-icon icon" onClick={() => toggleFav(todo.id)}>
        {todo.isFavorite ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
      </div>
      <div
        className="del-icon icon"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <RiDeleteBin6Fill />
      </div>
    </div>
  );
};

export default TodoItem;
