function Column({ title, className, tasks }) {
  return (
    <div className={`box ${className}`}>
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task-card">
            {task.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;