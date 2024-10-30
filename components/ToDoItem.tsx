import { Checkbox } from '@mui/material'
import React from 'react'
import Image from 'next/image';

interface Props {
    todo:string
}

 const ToDoItem = ({todo}: Props) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(233, 222, 228, 0.8)',
        marginBottom: '1rem', borderRadius: '0.5rem',
        padding: '0.5rem',
        display:'flex',
        justifyContent: 'space-between',
      }}
    >
        <div style={{display:'flex', alignItems:'center'}}>
        <Checkbox  />
          {todo}
        </div>

       <button style={{border: 'none', background: 'none'}}>
        <Image src="/delete.png" alt="delete-button" width={16} height={16} />
       </button>
        </div>
       
  )
}

export default ToDoItem