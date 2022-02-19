import React from 'react'

const TodoItem = ({tod}) => {
  return (
    <div className="border shadow-sm my-3 p-2 rounded text-capitalize">
      {tod.name}
    </div>
  )
}

export default TodoItem