import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TaskCardTitle from './TaskCardTitle'
import TaskAddInput from './input/TaskAddInput'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import Tasks from './Tasks'

interface TaskCardProps {
  taskCardsList: any
  setTaskCardsList: any
  taskCard: any
  index: number
}

const TaskCard = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
  index,
}: TaskCardProps) => {
  const [inputText, setInputText] = useState('') // taskに追加するinput
  const [taskList, setTaskList] = useState([]) // taskたちを管理する

  return (
    <Draggable index={index} draggableId={taskCard.id}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndTaskCardDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
