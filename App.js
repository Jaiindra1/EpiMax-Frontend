import {Component} from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'

import './App.css'

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description of Task 1',
        status: 'Pending',
        assignee: 'User1',
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description of Task 2',
        status: 'Completed',
        assignee: 'User2',
      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Description of Task 3',
        status: 'Pending',
        assignee: 'User1',
      },
      {
        id: 4,
        title: 'Task 4',
        description: 'Description of Task 4',
        status: 'Completed',
        assignee: 'User3',
      },
    ],
  }

  handleTaskSubmit = newTask => {
    const task = {
      id: Math.random().toString(), // Generate unique ID (temporary solution)
      title: newTask.title,
      description: newTask.description,
      dueDate: newTask.dueDate,
      assignee: newTask.assignee,
      status: 'Pending', // Set default status
    }
    this.setState(prevState => ({tasks: [...prevState.tasks, task]}))
  }

  handleUpdateStatus = (taskId, status) => {
    const updatedTasks = this.setstate.tasks.map(task => {
      if (task.id === taskId) {
        return {...task, status}
      }
      return task
    })
    this.setState({tasks: updatedTasks})
  }

  render() {
    const {tasks} = this.state
    return (
      <div className="App">
        <h1>Task Management App</h1>
        <TaskForm onSubmit={this.handleTaskSubmit} />
        <TaskList tasks={tasks} onUpdateStatus={this.handleUpdateStatus} />
        <TaskSummary tasks={tasks} />
      </div>
    )
  }
}

export default App
