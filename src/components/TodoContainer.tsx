import { useEffect, useState } from "react";
import "../TodoContainer.css";
import AddTaskComponent from "./AddTaskComponent";
import Header from "./Header";
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
  const editTodo = (id: string, newTitle: string) => {
    const udpatedItems = todos.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setTodos(udpatedItems);
  };
  // Method to delete todo
  const deleteTodo = (id: string) => {
    const udpatedItems = todos.filter((todo) => todo.id !== id);
    setTodos(udpatedItems);
  };

  // Method to sort todos by : 1. Done - 2. Favorite - 3. Date
  const sortedList = [...todos].sort((a, b) => {
    // First we sort by isDone
    const doneSorting = Number(a.isDone) - Number(b.isDone);
    if (doneSorting !== 0) {
      return doneSorting;
    }

    // Second we sort by favorite
    const favoriteSorting = Number(b.isFavorite) - Number(a.isFavorite);
    if (favoriteSorting !== 0) {
      return favoriteSorting;
    }

    return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
  });

  return (
    <>
      <div className="container">
        <Header todos={todos} setTodos={setTodos} />

        <AddTaskComponent onAddClick={setTodos} />

        <TodoList
          todos={sortedList}
          toggleFav={toggleFavorite}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      </div>
      <footer className="app-footer">
        <span>Version 1.0.0 </span>
        <span>© 2025 Ahmad El-Baz. All rights reserved.</span>
      </footer>
    </>
  );
};

export default TodoContainer;
