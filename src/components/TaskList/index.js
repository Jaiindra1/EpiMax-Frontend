const TaskList = ({tasks, onUpdateStatus}) => (
  <div className="task-list-container">
    <h2>Task List</h2>
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <div>
            <button
              onClick={() => onUpdateStatus(task.id, 'Pending')}
              type="button"
            >
              Pending
            </button>
            <button
              onClick={() => onUpdateStatus(task.id, 'In Progress')}
              type="button"
            >
              In Progress
            </button>
            <button
              onClick={() => onUpdateStatus(task.id, 'Completed')}
              type="button"
            >
              Completed
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default TaskList
