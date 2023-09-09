import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Когда какой-то пустой список елементов массива
  const [newTask, setNewTask] = useState(""); // Состояние для input по умол.ч. пустой

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDelete = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  };



  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button onClick={handleAdd}>add</button>

      {tasks.length === 0 ? (
        <p>No tasks</p>
      ): (
        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => handleDelete(index)}>del</button>
                </li>
            ))}
        </ol>
      )}
    </div>
  );
};

export default TodoList;
