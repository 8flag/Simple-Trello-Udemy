import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export interface TaskType {
  id: number
  text: string
  draggableId: string
}

interface TaskProps {
  index: number
  task: TaskType
  taskList: TaskType[]
  setTaskList: any
}

const Task = ({ index, task, taskList, setTaskList }: TaskProps) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((e) => e.id !== id))
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default Task
