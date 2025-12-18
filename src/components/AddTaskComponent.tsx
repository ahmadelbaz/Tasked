import { useRef } from "react";
import "../TodoContainer.css";
import type { Todo } from "./TodoContainer";

type Props = {
  onAddClick: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const AddTaskComponent = ({ onAddClick }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const curDate = new Date();
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      if (inputRef.current.value === "") {
        return;
      }
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: inputRef.current.value,
        dateTime: curDate,
        isDone: false,
        isFavorite: false,
      };
      onAddClick((prev) => [...prev, newTodo]);
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add new task"
          className="taskInput"
          ref={inputRef}
        />
        <button type="submit" onClick={addTask} className="addBtn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTaskComponent;
