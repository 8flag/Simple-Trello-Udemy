import React from 'react'

interface TaskCardDeleteButtonProps {
  taskCardsList: any
  setTaskCardsList: any
  taskCard: any
}
const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}: TaskCardDeleteButtonProps) => {
  const taskCardDeleteButton = (id: string) => {
    // タスクカード（全体）を削除する
    setTaskCardsList(taskCardsList.filter((e: any) => e.id !== id))
  }

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
