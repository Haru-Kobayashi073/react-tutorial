import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
    //押されたTodoのidを渡す
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick}/>
      </label>
      {todo.name}
    </div>
  )
}

export default Todo