import React, { useMemo, useState, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";
import Card from "../components/Card";
import { ThemeContext } from "../context/ThemeContext";

const FILTERS = ["All", "Active", "Completed"];

export default function TaskManager() {
  const { theme } = useContext(ThemeContext); // for conditional styling
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("All");

  // Add a new task
  function addTask() {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks((prev) => [
      { id: Date.now(), text: trimmed, completed: false },
      ...prev,
    ]);
    setText("");
  }

  // Toggle task completed status
  function toggle(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  // Remove task
  function remove(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  // Clear all completed tasks
  function clearCompleted() {
    setTasks((prev) => prev.filter((t) => !t.completed));
  }

  // Filter tasks
  const filtered = useMemo(() => {
    if (filter === "All") return tasks;
    if (filter === "Active") return tasks.filter((t) => !t.completed);
    return tasks.filter((t) => t.completed);
  }, [tasks, filter]);

  return (
    <div className={`space-y-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
      {/* Input and filter controls */}
      <Card>
        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="New task..."
            aria-label="New task"
            className="flex-1 p-2 rounded border dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="mt-3 flex gap-2 flex-wrap items-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 dark:text-white"
              }`}
            >
              {f}
            </button>
          ))}

          <div className="ml-auto flex gap-2">
            <Button variant="secondary" onClick={() => setTasks([])}>
              Clear All
            </Button>
            <Button variant="secondary" onClick={clearCompleted}>
              Clear Completed
            </Button>
          </div>
        </div>
      </Card>

      {/* Task list */}
      <div className="grid gap-3">
        {filtered.length === 0 && <Card>No tasks</Card>}
        {filtered.map((task) => (
          <Card key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggle(task.id)}
                aria-label={`Complete ${task.text}`}
                className="w-4 h-4 accent-blue-600"
              />
              <span
                className={`transition duration-300 ${
                  task.completed ? "line-through text-gray-400 dark:text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
            </div>

            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => toggle(task.id)}>
                {task.completed ? "Undo" : "Done"}
              </Button>
              <Button variant="danger" onClick={() => remove(task.id)}>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
