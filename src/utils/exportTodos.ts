import { appVersion } from "@/config/consts";
import type { Todo } from "../components/TodoContainer";

export const exportTodos = (todos: Todo[]) => {
  const exportData = {
    version: `${appVersion}`,
    exportedAt: new Date().toISOString(),
    todos,
  };

  const json = JSON.stringify(exportData, null, 2);

  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "tasked-todos.json";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
