import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

function sayHello() {
  console.log("Hello Piyush");
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  // reducer --> contains properties and function
  reducers: {
    // property
    // property ke ander hote hai functions {i.e., reference dena hai, call nhi krna function ko}
    // ho skta ha ki function khi or declared kiye ho

    // Example
    // addTodo:sayHello

    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        // payload is an object
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// export individual reducers because they are used in components
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer