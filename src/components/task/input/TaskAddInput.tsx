import React from 'react'
import { TaskType } from '../Task'
import { v4 as uuidv4 } from 'uuid'

interface TaskAddInputProps {
  inputText: string
  setInputText: any
  taskList: TaskType[]
  setTaskList: any
}

const TaskAddInput = ({
  inputText,
  setInputText, // これで親コンポーネントの内容を書き換えられる (TaskCard)
  taskList,
  setTaskList,
}: TaskAddInputProps) => {
  const handleSubmit = (e: any) => {
    e.preventDefault()

    // カードを追加する
    const taskId = uuidv4()
    if (inputText.trim().length > 0) {
      setTaskList([
        ...taskList,
        {
          // id: taskList.length, // アンチパターン。長さが可変なので、idが重複しがち
          id: taskId,
          text: inputText,
          draggableId: `task-${taskId}`,
        },
      ])
    }
    console.log(taskList)

    // エンター押したら、inputTextは空にする（連続してタスクを追加しやすくするため）
    setInputText('')
  }

  const handleChange = (e: any) => {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}

export default TaskAddInput
