import { Checkbox, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import { ToDO } from '../types'; // Adjusted import to match the correct export name
import { useStore } from '../Store';

interface Props {
    todo:ToDO;
}

const ToDoItem = ({todo}: Props) => {

    const removeTodo = useStore((state) => state.removeTodo);

    const toggleChecked = useStore((state) => state.toggleChecked);

    const toggleCheckbox = (event: React.ChangeEvent) => {
        // Function implementation (if needed)
    };

    return (
        <div
            style={{
                backgroundColor: 'rgba(233, 222, 228, 0.8)',
                marginBottom: '1rem',
                borderRadius: '0.5rem',
                padding: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                    checked={todo.checked}
                    onClick={() => toggleChecked(todo.id)}
                />
                <Typography
                    sx={{
                        textDecoration: todo.checked ? 'line-through' : 'none',
                        color: todo.checked ? 'rgba(0, 0, 0, 0.5)' : 'black',
                        marginLeft: '0.5rem',
                    }}
                >
                    {todo.description}
                </Typography>
            </div>

            <button
                style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                }}
                onClick={() => removeTodo(todo.id)}
            >
                <Image
                    src="/delete.png"
                    alt="delete-button"
                    width={16}
                    height={16}
                />
            </button>
        </div>
    );
};

export default ToDoItem