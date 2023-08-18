import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false)
  const [inputCardTitle, setInputCardTitle] = useState('Today')

  const handleClick = () => {
    setIsClick(true)
  }

  const handleChange = (e: any) => {
    console.log(inputCardTitle)
    setInputCardTitle(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsClick(false)
  }

  const handleBlur = (e: any) => {
    setIsClick(false)
  }

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  )
}

export default TaskCardTitle
