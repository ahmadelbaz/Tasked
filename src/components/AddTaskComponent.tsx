import { useRef } from "react";
import "../TodoContainer.css";
import type { Todo } from "./TodoContainer";
import { Button } from "./ui/button";

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
          className="taskInput w-1/2 text-xl"
          ref={inputRef}
          dir="auto"
        />
        <Button className="rounded-full h-12 w-20 bg-primary" onClick={addTask}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddTaskComponent;
