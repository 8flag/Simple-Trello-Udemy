import React from 'react'

export interface TaskType {
  id: number
  text: string
}

interface TaskProps {
  task: TaskType
  taskList: TaskType[]
  setTaskList: any
}

const Task = ({ task, taskList, setTaskList }: TaskProps) => {
  const handleDelete = (id: number) => {
    console.log('消えます')
    setTaskList(taskList.filter((e) => e.id !== id))
  }

  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  )
}

export default Task
