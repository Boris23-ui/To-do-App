import { TextField, Typography, Button } from '@mui/material'
import React from 'react'
import ToDoItem from './ToDoItem'
import { useStore } from "../Store";

// Define the Todo type
interface Todo {
  id: string; // or number, depending on your data structure
  // Add other properties as needed
}

const ToDoContainer = () => {

  

  const todos = useStore((state) => state.todos);

  const addToDos = useStore((state) => state.addTodo);

  // Debugging: Log the addToDos function to check if it's defined
  console.log('addToDos:', addToDos);

  const  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = event.currentTarget[0].value; // Get the value from the input
    if (typeof addToDos === 'function' && newTodo) { // Check if addToDos is a function and newTodo is not empty
      addToDos(newTodo); // Call the addToDos function with the new todo
      event.currentTarget.reset(); // Reset the form after submission
    } else {
      console.error('addToDos is not a function or input is empty');
    }
  }
  

 

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
        onSubmit={handleSubmit}
        >
         <TextField
            id="outlined-basic"
            label="Outlined" 
            variant="outlined"
          />


        <Button
          type='submit'
          variant='contained'
          sx={{ background: 'linear-gradient(#e16465, #2198e5)',}}
        >
          Submit
        </Button>
      </form>

      {Array.isArray(todos) && todos.map((todo: Todo) => {
        return <ToDoItem todo={todo} key={todo.id} />
      })}

      </div>
  )
}

export default ToDoContainer