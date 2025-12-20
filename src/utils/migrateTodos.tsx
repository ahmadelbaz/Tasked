import type { Todo } from "../components/TodoContainer";

export function migrateTodos(todos: any[], fromVersion: string): Todo[] {
  switch (fromVersion) {
    case "1.0.0":
      return todos.map((todo) => ({
        ...todo,
        dateTime: new Date(todo.dateTime),
      }));

    default:
      throw new Error("Unsupported version");
  }
}
