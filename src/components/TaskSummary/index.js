import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const TaskSummary = ({tasks}) => {
  // Calculate task completion rates
  const completedTasks = tasks.filter(task => task.status === 'Completed')
    .length
  const totalTasks = tasks.length
  const completionRate =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100

  // Group tasks by assignee
  const tasksByAssignee = tasks.reduce((acc, task) => {
    if (!acc[task.assignee]) {
      acc[task.assignee] = 0
    }
    if (task.status === 'Completed') {
      acc[task.assignee] += 1
    }
    return acc
  }, {})

  const assigneeData = Object.keys(tasksByAssignee).map(assignee => ({
    name: assignee,
    completedTasks: tasksByAssignee[assignee],
  }))

  return (
    <div>
      <h2>Task Summary</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Completion Rate: {completionRate.toFixed(2)}%</p>
      <h3>Task Completion by Assignee</h3>
      <BarChart
        width={600}
        height={300}
        data={assigneeData}
        margin={{top: 20, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completedTasks" fill="#8884d8" />
      </BarChart>
    </div>
  )
}

export default TaskSummary
