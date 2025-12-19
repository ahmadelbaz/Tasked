import { useEffect, useState } from "react";
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
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const fetcedData = localStorage.todoList;

      if (fetcedData) {
        return JSON.parse(fetcedData);
      } else {
        return [];
      }
    } catch (error) {
      console.log(`Error fetching data : ${error}`);
    }
  });

  useEffect(() => {
    try {
      localStorage.todoList = JSON.stringify(todos);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);

  // List of ONLY done todos
  let doneTodos: Todo[] = todos.filter((todo) => {
    if (todo.isDone) {
      return todo;
    }
  });
  let unDoneTodos = todos.filter((todo) => {
    if (!todo.isDone) {
      return todo;
    }
  });

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
        todos={unDoneTodos}
        toggleFav={toggleFavorite}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
      />

      <TodoList
        todos={doneTodos}
        toggleFav={toggleFavorite}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
      />

      <footer className="app-footer">
        <span>Version 0.1.0 </span>
        <span>© 2025 Ahmad El-Baz. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default TodoContainer;
