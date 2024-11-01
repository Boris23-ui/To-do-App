import { create } from "zustand";
import { ToDO } from "../types";

import { v4 as uuidv4 } from "uuid";


interface Store {
    todos: ToDO[];
    addTodo: (description: string) => void;
}

const useStore = create<ToDOState>((set) => ({
    toDos: [],
    addToDO: (description: string) =>
         set((state) => ({
            toDos: [...state.toDos, { id: uuidv4(),
                 description, checked: false }], })
}))