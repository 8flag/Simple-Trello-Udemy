import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
/*
<DragDropContext>で囲む
- onDragEndを追加
<Droppable>を生やす（childrenが必要のエラーを回避）
- droppableIdを生やす（これは必須） ・・・　複数のドロップ可能エリアを作るときに識別子がないとconflictするから
- {(provided) => <div></div>} を生やす (以下が必要)
  - provided.droppableProps
  - innerRef
<Draggable>を生やす
- 注意) draggableIdはuniqueなものを与えないといけない
- {(provided) => <div></div>} を生やす (以下が必要)
  - provided.draggableProps
  - provided.dragHandleProps
  - innerRef
*/
const TaskCard = ({
  text,
  index,
  draggableId,
}: {
  text: string
  index: number
  draggableId: string
}) => (
  <Draggable index={index} draggableId={draggableId}>
    {(provided) => (
      <div
        className="playground-taskCard"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <button>{text}</button>
      </div>
    )}
  </Draggable>
)

function App() {
  const handleDragEnd = () => {
    // ここにsetListとかを記述して、dragEnd時にstateを固定する
  }
  const tasksList = [...Array(3)].map((e, i) => ({
    id: uuidv4(),
    draggableId: `item-${uuidv4()}`,
    text: `task-${i}`,
  }))

  return (
    <div className="app">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasksList.map((task, index) => (
                <TaskCard
                  index={index}
                  text={task.text}
                  key={task.id}
                  draggableId={task.draggableId}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default App
