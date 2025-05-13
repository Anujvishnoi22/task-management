import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    remarks: '',
    createdBy: 'Anuj',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    addTask({
      ...task,
      id: Date.now().toString(),
      createdOn: timestamp,
      lastUpdatedOn: timestamp,
      lastUpdatedBy: task.createdBy,
    });
    setTask({ ...task, title: '', description: '', dueDate: '', remarks: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Task Title" value={task.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Task Description" value={task.description} onChange={handleChange} required />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <input name="remarks" placeholder="Remarks" value={task.remarks} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
