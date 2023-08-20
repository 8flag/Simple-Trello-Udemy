import React from 'react'
import { v4 as uuidv4 } from 'uuid'

interface AddTaskCardButtonProps {
  taskCardsList: any[]
  setTaskCardsList: any
}

const AddTaskCardButton = ({
  taskCardsList,
  setTaskCardsList,
}: AddTaskCardButtonProps) => {
  const addTaskCard = () => {
    // タスクカードを追加する
    const taskCardId = uuidv4()
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId, // NOTE: uniqueである必要がある
        draggableId: `item-${taskCardId}`, // NOTE: uniqueである必要がある
      },
    ])
    console.log(taskCardsList)
  }
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  )
}

export default AddTaskCardButton
