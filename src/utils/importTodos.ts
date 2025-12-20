import type { Todo } from "../components/TodoContainer";
import { migrateTodos } from "./migrateTodos";

type ImportedData = {
  version: string;
  exportedAt: string;
  todos: Todo[];
};

export function importTodosFromFile(file: File): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    if (file.type !== "application/json") {
      reject(new Error("Invalid file type"));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const parsed: ImportedData = JSON.parse(reader.result as string);

        if (!parsed.todos || !Array.isArray(parsed.todos)) {
          throw new Error("Invalid file structure");
        }

        const migratedTodos = migrateTodos(parsed.todos, parsed.version);

        resolve(migratedTodos);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file"));
    };

    reader.readAsText(file);
  });
}
