import { useState } from "react";
import "../TodoContainer.css";
import AddTaskComponent from "./AddTaskComponent";
import TodoList from "./TodoList";

export type Todo = {
  id: string;
  title: string;
  dateTime: Date;
  isDone: boolean;
  isFavorite: boolean;
};

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Method to make tasks Favorite and unFavorite
  const toggleFavorite = (id: string) => {
    const udpatedITems = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setTodos(udpatedITems);
  };

  // Method to make tasks Done and unDone
  const toggleDone = (id: string) => {
    const udpatedITems = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodos(udpatedITems);
  };

  // Method to delete todo
  const deleteTodo = (id: string) => {
    const udpatedITems = todos.filter((todo) => todo.id !== id);
    setTodos(udpatedITems);
  };

  return (
    <div className="container">
      <h3>Tasked</h3>
      <AddTaskComponent onAddClick={setTodos} />
      <TodoList
        todos={todos}
        toggleFav={toggleFavorite}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
      />
    </div>
  );
};

export default TodoContainer;
