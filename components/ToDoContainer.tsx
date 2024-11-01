import { responsiveFontSizes, TextField, Typography, Button } from '@mui/material'
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
      
      <Typography 
       variant='h1'
       sx={{
       fontSize: '3rem', fontWeight: 500, marginBottom: '1rem'}}  >ToDos
      </Typography>

      <form 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between',
          marginBottom: '1rem',

        }}
        >
         <TextField
            id="outlined-basic"
            label="Outlined" 
            variant="outlined"
          />


        <Button
          variant='contained'
          sx={{ background: 'linear-gradient(#e16465, #2198e5)',}}
        >
          Submit
        </Button>
      </form>

      {mockTodos.map((todo) => {
        return <ToDoItem todo={todo} key={todo} />
      }
    )}

      </div>
  )
}

export default ToDoContainer