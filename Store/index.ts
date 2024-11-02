import { create } from "zustand";
import { ToDO as ToDo } from "../types";

import { v4 as uuidv4 } from "uuid";


interface ToDoState {
    todos: ToDo[];
    addTodo: (description: string) => void;

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
        }))