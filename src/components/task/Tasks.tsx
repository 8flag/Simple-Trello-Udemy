import React from 'react'
import Task, { TaskType } from './Task'

interface TasksProps {
  inputText: string
  taskList: TaskType[]
  setTaskList: any
}

const Tasks = ({ inputText, taskList, setTaskList }: TasksProps) => {
  return (
    <div>
      {taskList.map((task, index) => (
        <Task
          key={index}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </div>
  )
}

export default Tasks
