import React, { useState } from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskAddInput from './input/TaskAddInput'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import Tasks from './Tasks'

const TaskCard = () => {
  const [inputText, setInputText] = useState('') // taskに追加するinput
  const [taskList, setTaskList] = useState([]) // taskたちを管理する

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
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
  )
}

export default TaskCard
