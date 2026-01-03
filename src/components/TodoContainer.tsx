import { appVersion } from "@/config/consts";
import { useEffect, useState } from "react";
import "../TodoContainer.css";
import AddTaskComponent from "./AddTaskComponent";
import FilteringBar from "./FilteringBar";
import Header from "./Header";
import TodoList from "./TodoList";

export type Todo = {
  id: string;
  title: string;
  dateTime: Date;
  isDone: boolean;
  isFavorite: boolean;
};

type Filters = {
  search: string;
  isFavorite: boolean;
};

const TodoContainer = () => {
  function restoreTodos(rawTodos: any[]): Todo[] {
    return rawTodos.map((todo) => ({
      ...todo,
      dateTime: new Date(todo.dateTime),
    }));
  }

  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const fetchedData = localStorage.todoList;

      if (!fetchedData) return [];

      const parsed = JSON.parse(fetchedData);
      return restoreTodos(parsed);
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
      return [];
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

  const [filters, setFilters] = useState<Filters>({
    search: "",
    isFavorite: false,
  });

  // Method to set search text
  const setSearchText = (text: string) => {
    console.log(`this is our search text ${text}`);
    setFilters((prev) => ({
      ...prev,
      search: text,
    }));
  };

  // Method to toggle the favorite filter
  const toggleFavoriteFilter = () => {
    setFilters((prev) => ({
      ...prev,
      isFavorite: !prev.isFavorite,
    }));
  };

  const filteredList = sortedList.filter((todo) => {
    console.log(`filters.search ${filters.search}`);

    // Filter by search
    const searchFilter =
      filters.search === "" ||
      todo.title.toLowerCase().includes(filters.search);

    // Filter by favorites
    const favoriteFilter = filters.isFavorite === todo.isFavorite;

    return searchFilter && favoriteFilter;
  });

  return (
    <>
      <div className="container py-2">
        <Header todos={todos} setTodos={setTodos} />

        <AddTaskComponent onAddClick={setTodos} />

        <FilteringBar
          onSearch={setSearchText}
          toggleFavoriteFilter={toggleFavoriteFilter}
        />

        <TodoList
          todos={filteredList}
          toggleFav={toggleFavorite}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      </div>
      <footer className="app-footer">
        <span>Version {`${appVersion}`} </span>
        <span>© 2025 Ahmad El-Baz. All rights reserved.</span>
      </footer>
    </>
  );
};

export default TodoContainer;
