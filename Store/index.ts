import { create } from "zustand";
import { ToDO as ToDo } from "../types";

import { v4 as uuidv4 } from "uuid";


interface ToDoState {
    todos: ToDo[];
    addTodo: (description: string) => void;
    removeTodo: (id: string) => void;
    toggleChecked: (id: string) => void;

}

export const useStore = create<ToDoState>((set) => ({
    todos: [],
    addTodo: (description: string) =>
         set((state) => ({
            todos: [...state.todos, {
                 id: uuidv4(),
                 description,
                 checked: false }],
        
            })),
            removeTodo: (id: string) => set((state) => ({
                todos: state.todos.filter(todo => todo.id !== id)
            })),
            toggleChecked: (id: string) => set((state) => ({
                todos: state.todos.map((todo: ToDo) => 
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            }))
        }));