import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './App.css'

function App() {
  const [items, setItems] = useState([
    { id: '0', text: 'item0' },
    { id: '1', text: 'item1' },
    { id: '2', text: 'item2' },
  ])

  const onDragEnd = (result: any) => {
    console.log(result.source.index, '--->', result.destination.index)
    const remove = items.splice(result.source.index, 1) // indexを1つ消す
    items.splice(result.destination.index, 0, remove[0]) // spliceはmutableな変更をするので、reactで使うのは良くない...
  } // Drag操作が終了したときに実行される処理

  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable draggableId={item.text} index={index} key={item.id}>
                  {(provided) => (
                    <div
                      className="item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
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
