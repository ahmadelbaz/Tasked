import type { Todo } from "./TodoContainer";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  toggleFav: (id: string) => void;
  editTodo: (id: string, newTitle: string) => void;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

const TodoList = ({
  todos,
  toggleFav,
  editTodo,
  deleteTodo,
  toggleDone,
}: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleFav={toggleFav}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default TodoList;
