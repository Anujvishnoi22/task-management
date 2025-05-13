import React, { useState } from 'react';

function TaskList({ tasks, updateTask, deleteTask }) {
  const [search, setSearch] = useState('');

  const handleStatusChange = (id) => {
    const updated = tasks.map(t =>
      t.id === id ? { ...t, status: t.status === 'Pending' ? 'Completed' : 'Pending', lastUpdatedOn: new Date().toISOString() } : t
    );
    updated.forEach(updateTask);
  };

  return (
    <div className="task-list">
      <input
        placeholder="Search by Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase())).map(task => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <p>Remarks: {task.remarks}</p>
          <small>Created: {task.createdOn}</small><br />
          <small>Last Updated: {task.lastUpdatedOn}</small><br />
          <small>By: {task.createdBy}</small>
          <div className="actions">
            <button onClick={() => handleStatusChange(task.id)}>Toggle Status</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
