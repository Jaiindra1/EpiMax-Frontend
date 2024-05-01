import {Component} from 'react'

class TaskForm extends Component {
  state = {
    title: '',
    description: '',
    dueDate: '',
    assignee: '',
    errors: {},
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    const {title, description, dueDate, assignee} = this.state
    const errors = {}

    if (!title.trim()) {
      errors.title = 'Title is required'
    }

    if (!description.trim()) {
      errors.description = 'Description is required'
    }

    if (!dueDate.trim()) {
      errors.dueDate = 'Due Date is required'
    }

    if (!assignee) {
      errors.assignee = 'Assignee is required'
    }

    if (Object.keys(errors).length === 0) {
      // Handle form submission
      console.log('New Task:', {title, description, dueDate, assignee})
      // Reset form fields
      this.setState({
        title: '',
        description: '',
        dueDate: '',
        assignee: '',
        errors: {},
      })
    } else {
      this.setState({errors})
    }
  }

  render() {
    const {title, description, dueDate, assignee, errors} = this.state

    return (
      <div>
        <h2>Add New Task</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
                className="title"
              />
            </label>
            {errors.title && <p>{errors.title}</p>}
          </div>
          <div>
            <label>
              Description:
              <textarea
                name="description"
                value={description}
                onChange={this.handleChange}
              />
            </label>
            {errors.description && <p>{errors.description}</p>}
          </div>
          <div>
            <label>
              Due Date:
              <input
                type="date"
                name="dueDate"
                value={dueDate}
                onChange={this.handleChange}
              />
            </label>
            {errors.dueDate && <p>{errors.dueDate}</p>}
          </div>
          <div>
            <label>
              Assignee:
              <select
                name="assignee"
                value={assignee}
                onChange={this.handleChange}
              >
                <option value="">Select Assignee</option>
                <option value="User1">User1</option>
                <option value="User2">User2</option>
                <option value="User3">User3</option>
              </select>
            </label>
            {errors.assignee && <p>{errors.assignee}</p>}
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    )
  }
}

export default TaskForm
