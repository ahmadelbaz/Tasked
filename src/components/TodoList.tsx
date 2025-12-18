import type { Todo } from "./TodoContainer";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  toggleFav: (id: string) => void;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

const TodoList = ({ todos, toggleFav, deleteTodo, toggleDone }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleFav={toggleFav}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default TodoList;
