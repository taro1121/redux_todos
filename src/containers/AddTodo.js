import React from 'react'
import { connect } from 'react-redux'
import { addTodo, resetTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <form
        onSubmit={() => {
          // e.preventDefault()
          dispatch(resetTodo())
      }}>
        <button type="submit">
          Reset
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
