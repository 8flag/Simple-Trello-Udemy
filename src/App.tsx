import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './App.css'

function App() {
  const [items, setItems] = useState(['item0', 'item1', 'item2'])

  const onDragEnd = (result: any) => {
    console.log(result.source.index, '--->', result.destination.index)
    const remove = items.splice(result.source.index, 1) // indexを1つ消す
    items.splice(result.destination.index, 0, remove[0]) // spliceはmutableな変更をするので、reactで使うのは良くない...
    console.log(items)
  } // Drag操作が終了したときに実行される処理

  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId="item0" index={0}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {items[0]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="item1" index={1}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {items[1]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="item2" index={2}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {items[2]}
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default App
