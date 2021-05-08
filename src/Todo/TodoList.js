import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

//стилі для ключа ul
const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList({todos, onToggle}) {
  return (
    /*щоб задати список ключу ul треба задати об'єкт{styles.ul}*/
    <ul style={styles.ul}> 
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={onToggle}
          />
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList
