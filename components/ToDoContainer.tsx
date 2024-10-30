import { responsiveFontSizes, Typography } from '@mui/material'
import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoContainer = () => {

  const mockTodos = ['todo1', 'todo2', 'todo3']

  return (
    <div style={{
      backgroundColor: '#ffffff',
      maxHeight: '50vh',
      marginTop: '10vh',
      padding: '2rem',
      borderRadius: '1rem',
      minWidth: '40vh',
      }}>
      
      <Typography variant='h1' sx={{
        fontSize: '3rem', fontWeight: 500}}  >ToDo</
      Typography>

      {mockTodos.map((todo) => {
        return <ToDoItem todo={todo} key={todo} />
      }
    )}

      </div>
  )
}

export default ToDoContainer