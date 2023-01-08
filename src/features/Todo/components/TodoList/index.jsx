import React from 'react'
import PropTypes from 'prop-types'

TodoList.defaultProps = {
  todoList: []
}

function TodoList(props) {
  const { todoList } = props

  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
}

export default TodoList
