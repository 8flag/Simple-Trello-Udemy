import React, { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskCardButton from './AddTaskCardButton'
import { v4 as uuidv4 } from 'uuid'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { reorder } from './Tasks'

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: '0', draggableId: 0 },
  ])

  const handleDragEnd = (result: any) => {
    // Drag自体はできるが、ドラッグを離すと順番が戻ってしまう。setStateで順番を固定させるにはここに処理を書く
    reorder(taskCardsList, result.source.index, result.destination.index)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards
