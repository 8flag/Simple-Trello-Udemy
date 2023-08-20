import React from 'react'
import Task, { TaskType } from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

interface TasksProps {
  inputText: string
  taskList: TaskType[]
  setTaskList: any
}

// Tasksの入れ替えだけでなく、TaskCardsの入れ替えでも使いたいのでlistの要素の型は<T>の型パラにする
export const reorder = <T,>(
  list: T[],
  startIndex: number,
  endIndex: number
) => {
  console.log(`${startIndex} ---> ${endIndex}`)
  const removedTask = list.splice(startIndex, 1)[0]
  list.splice(endIndex, 0, removedTask)
  return list
}

const Tasks = ({ inputText, taskList, setTaskList }: TasksProps) => {
  const handleDragEnd = (result: any) => {
    result.destination &&
      reorder(taskList, result.source.index, result.destination.index)
    setTaskList(taskList)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
